output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID — needed for cache invalidations in GitHub Actions"
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_domain" {
  description = "CloudFront domain name"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "s3_bucket_name" {
  description = "S3 bucket name for the website"
  value       = aws_s3_bucket.website.bucket
}

output "route53_nameservers" {
  description = "Route 53 nameservers — update these at your domain registrar to point DNS to AWS"
  value       = aws_route53_zone.primary.name_servers
}

output "github_deploy_role_arn" {
  description = "IAM role ARN for GitHub Actions — set as AWS_ROLE_ARN in GitHub Actions workflow"
  value       = aws_iam_role.github_deploy.arn
}

output "oauth_api_endpoint" {
  description = "Decap CMS OAuth proxy API endpoint"
  value       = "https://api.${var.domain_name}"
}

output "files_bucket_name" {
  description = "S3 bucket for club file uploads (PDFs, schedules, etc.)"
  value       = aws_s3_bucket.files.bucket
}

output "files_uploader_access_key_id" {
  description = "Access key ID for the file uploader IAM user (for Cyberduck)"
  value       = aws_iam_access_key.files_uploader.id
  sensitive   = true
}

output "files_uploader_secret_access_key" {
  description = "Secret access key for the file uploader IAM user (for Cyberduck)"
  value       = aws_iam_access_key.files_uploader.secret
  sensitive   = true
}
