locals {
  s3_origin_id       = "omcracing-s3-origin"
  s3_files_origin_id = "omcracing-s3-files-origin"
}

# CloudFront Function — rewrites directory requests to /path/index.html
# Needed because S3 doesn't serve index.html for subdirectory paths like /calendar
resource "aws_cloudfront_function" "rewrite_index" {
  name    = "omcracing-rewrite-index"
  runtime = "cloudfront-js-2.0"
  publish = true
  code    = <<-EOF
    function handler(event) {
      var request = event.request;
      var uri = request.uri;

      // Redirect /admin (no trailing slash) to /admin/ so Decap CMS hash
      // routing produces /admin/#/ instead of /admin#/
      if (uri === '/admin') {
        return {
          statusCode: 301,
          statusDescription: 'Moved Permanently',
          headers: { location: { value: '/admin/' } }
        };
      }

      // Append /index.html to trailing-slash URIs
      if (uri.endsWith('/')) {
        request.uri += 'index.html';
      }
      // Append /index.html to URIs with no file extension (e.g. /calendar, /sponsors)
      else if (!uri.includes('.', uri.lastIndexOf('/'))) {
        request.uri += '/index.html';
      }

      return request;
    }
  EOF
}

resource "aws_cloudfront_distribution" "website" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = [var.domain_name, "www.${var.domain_name}"]
  price_class         = "PriceClass_100" # US, Canada, Europe only — cheapest

  origin {
    domain_name              = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id                = local.s3_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.website.id
  }

  origin {
    domain_name              = aws_s3_bucket.files.bucket_regional_domain_name
    origin_id                = local.s3_files_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.website.id
  }

  # /files/* served from the dedicated files bucket — no index.html rewriting needed
  ordered_cache_behavior {
    path_pattern           = "/files/*"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.s3_files_origin_id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 86400   # 24h — files change infrequently
    max_ttl     = 604800  # 7 days
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.s3_origin_id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    # 1 hour default TTL; GitHub Actions invalidates on deploy
    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite_index.arn
    }
  }

  # 403 from S3 (missing object) → 404 page
  custom_error_response {
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 10
  }

  custom_error_response {
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 10
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.website.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = {
    Project = "omc-racing"
  }
}
