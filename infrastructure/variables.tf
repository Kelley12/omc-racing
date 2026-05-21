variable "aws_region" {
  description = "Primary AWS region"
  type        = string
  default     = "us-west-2"
}

variable "domain_name" {
  description = "Primary domain name"
  type        = string
  default     = "omcracing.com"
}

variable "github_org" {
  description = "GitHub organization or username that owns the repo"
  type        = string
  default     = "Kelley12"
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
  default     = "omc-racing"
}

variable "github_client_id" {
  description = "GitHub OAuth App client ID (for Decap CMS)"
  type        = string
  sensitive   = true
}

variable "github_client_secret" {
  description = "GitHub OAuth App client secret (for Decap CMS)"
  type        = string
  sensitive   = true
}
