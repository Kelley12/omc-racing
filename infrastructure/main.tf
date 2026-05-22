terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket  = "omcracing-tf-state"
    key     = "website/terraform.tfstate"
    region  = "us-west-2"
    profile = "omc-racing"
  }
}

provider "aws" {
  region  = var.aws_region
  profile = "omc-racing"
}

# ACM certs for CloudFront must be in us-east-1 regardless of primary region
provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = "omc-racing"
}
