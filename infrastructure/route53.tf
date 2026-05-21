resource "aws_route53_zone" "primary" {
  name = var.domain_name

  tags = {
    Project = "omc-racing"
  }
}

# Apex domain → CloudFront
resource "aws_route53_record" "apex" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

# www redirect → same CloudFront distribution (aliases include www)
resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

# OAuth proxy subdomain for Decap CMS (api.omcracing.com → Lambda)
resource "aws_route53_record" "api" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "api.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_apigatewayv2_domain_name.oauth.domain_name_configuration[0].target_domain_name
    zone_id                = aws_apigatewayv2_domain_name.oauth.domain_name_configuration[0].hosted_zone_id
    evaluate_target_health = false
  }
}
