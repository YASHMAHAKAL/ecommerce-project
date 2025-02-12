/* Infrastructure as Code (Terraform for AWS Lambda + API Gateway) */
// File: infra/main.tf
provider "aws" {
  region = "us-east-1"
}

resource "aws_lambda_function" "ecommerce_api" {
  function_name = "ecommerce-api"
  handler      = "index.handler"
  runtime      = "nodejs18.x"
  filename     = "backend.zip"
  role         = aws_iam_role.lambda_role.arn
}

resource "aws_api_gateway_rest_api" "ecommerce_api" {
  name        = "EcommerceAPI"
  description = "API for e-commerce platform"
}

output "api_gateway_url" {
  value = aws_api_gateway_rest_api.ecommerce_api.id
}