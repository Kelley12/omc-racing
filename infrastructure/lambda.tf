# Decap CMS GitHub OAuth proxy
# This Lambda handles the GitHub OAuth flow so Decap CMS can authenticate
# from a static site without exposing the client secret in the browser.
#
# The Lambda source lives in infrastructure/oauth-proxy/
# It implements the two-step GitHub OAuth flow:
#   GET /auth        → redirects to GitHub with client_id
#   GET /callback    → exchanges code for token, returns script that posts to opener

data "archive_file" "oauth_proxy" {
  type        = "zip"
  source_dir  = "${path.module}/oauth-proxy"
  output_path = "${path.module}/.build/oauth-proxy.zip"
}

resource "aws_iam_role" "oauth_lambda" {
  name = "omcracing-oauth-lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "oauth_lambda_basic" {
  role       = aws_iam_role.oauth_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "oauth_proxy" {
  function_name    = "omcracing-cms-oauth"
  filename         = data.archive_file.oauth_proxy.output_path
  source_code_hash = data.archive_file.oauth_proxy.output_base64sha256
  role             = aws_iam_role.oauth_lambda.arn
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  timeout          = 10

  environment {
    variables = {
      GITHUB_CLIENT_ID     = var.github_client_id
      GITHUB_CLIENT_SECRET = var.github_client_secret
      ALLOWED_ORIGIN       = "https://${var.domain_name}"
    }
  }

  tags = {
    Project = "omc-racing"
  }
}

# HTTP API Gateway (v2) — cheaper and simpler than REST API for this use case
resource "aws_apigatewayv2_api" "oauth" {
  name          = "omcracing-cms-oauth"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["https://${var.domain_name}"]
    allow_methods = ["GET"]
    max_age       = 300
  }
}

resource "aws_apigatewayv2_stage" "oauth" {
  api_id      = aws_apigatewayv2_api.oauth.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "oauth" {
  api_id             = aws_apigatewayv2_api.oauth.id
  integration_type   = "AWS_PROXY"
  integration_uri    = aws_lambda_function.oauth_proxy.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "auth" {
  api_id    = aws_apigatewayv2_api.oauth.id
  route_key = "GET /auth"
  target    = "integrations/${aws_apigatewayv2_integration.oauth.id}"
}

resource "aws_apigatewayv2_route" "callback" {
  api_id    = aws_apigatewayv2_api.oauth.id
  route_key = "GET /callback"
  target    = "integrations/${aws_apigatewayv2_integration.oauth.id}"
}

resource "aws_lambda_permission" "apigw" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.oauth_proxy.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.oauth.execution_arn}/*/*"
}

# Custom domain for the API (api.omcracing.com)
resource "aws_acm_certificate" "api" {
  provider          = aws.us_east_1
  domain_name       = "api.${var.domain_name}"
  validation_method = "DNS"
  lifecycle { create_before_destroy = true }
}

resource "aws_apigatewayv2_domain_name" "oauth" {
  domain_name = "api.${var.domain_name}"

  domain_name_configuration {
    certificate_arn = aws_acm_certificate.api.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_apigatewayv2_api_mapping" "oauth" {
  api_id      = aws_apigatewayv2_api.oauth.id
  domain_name = aws_apigatewayv2_domain_name.oauth.id
  stage       = aws_apigatewayv2_stage.oauth.id
}
