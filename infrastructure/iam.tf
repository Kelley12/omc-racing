# GitHub Actions OIDC provider — allows GitHub Actions to assume an AWS role
# without storing long-lived access keys as GitHub secrets.
resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

# IAM role that GitHub Actions assumes during deploy
resource "aws_iam_role" "github_deploy" {
  name = "omcracing-github-deploy"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Federated = aws_iam_openid_connect_provider.github.arn
      }
      Action = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = {
          "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
        }
        StringLike = {
          # Only allow the omc-racing repo on the master branch
          "token.actions.githubusercontent.com:sub" = "repo:${var.github_org}/${var.github_repo}:ref:refs/heads/master"
        }
      }
    }]
  })

  tags = {
    Project = "omc-racing"
  }
}

# ── File uploader IAM user ────────────────────────────────────────────────────
# Scoped to omcracing-files bucket only — cannot touch website files.

resource "aws_iam_user" "files_uploader" {
  name = "omcracing-files-uploader"

  tags = {
    Project = "omc-racing"
  }
}

resource "aws_iam_user_policy" "files_uploader" {
  name = "omcracing-files-upload"
  user = aws_iam_user.files_uploader.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "FilesAccess"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:DeleteObject",
          "s3:ListBucket",
        ]
        Resource = [
          aws_s3_bucket.files.arn,
          "${aws_s3_bucket.files.arn}/*",
        ]
      }
    ]
  })
}

resource "aws_iam_access_key" "files_uploader" {
  user = aws_iam_user.files_uploader.name
}

# Allow the uploader to log into the AWS Console and change their own password
resource "aws_iam_user_policy" "files_uploader_console" {
  name = "omcracing-console-access"
  user = aws_iam_user.files_uploader.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowPasswordChange"
        Effect = "Allow"
        Action = [
          "iam:GetAccountPasswordPolicy",
          "iam:ChangePassword",
        ]
        Resource = "arn:aws:iam::280553257669:user/omcracing-files-uploader"
      }
    ]
  })
}

# AWS Console login for the file uploader.
# Password is set manually on first login — ignore_changes prevents Tofu from
# rotating it on subsequent applies.
resource "aws_iam_user_login_profile" "files_uploader" {
  user                    = aws_iam_user.files_uploader.name
  password_reset_required = true

  lifecycle {
    ignore_changes = all
  }
}

# Policy: allow S3 sync + CloudFront invalidation
resource "aws_iam_role_policy" "github_deploy" {
  name = "omcracing-deploy-policy"
  role = aws_iam_role.github_deploy.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3Deploy"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:GetObject",
          "s3:ListBucket",
        ]
        Resource = [
          aws_s3_bucket.website.arn,
          "${aws_s3_bucket.website.arn}/*",
        ]
      },
      {
        Sid    = "CloudFrontInvalidate"
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation",
        ]
        Resource = aws_cloudfront_distribution.website.arn
      }
    ]
  })
}
