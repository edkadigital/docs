---
title: Prerequisites
description: Everything you need to get started with Edka
---

# Prerequisites

Before you can deploy your first Edka cluster, you'll need a few things set up. This guide will walk you through each prerequisite.

## Hetzner Cloud Account

Edka deploys your infrastructure on Hetzner Cloud, which offers excellent performance at competitive prices (often 80-90% less than AWS or GCP).

1. Visit [Hetzner Cloud](https://www.hetzner.com/cloud) and create an account
2. Provide payment information (credit card or PayPal)
3. Create a new project for your Edka-managed resources

## Hetzner API Token

Edka needs an API token to provision and manage resources in your Hetzner account:

1. Log in to the [Hetzner Cloud Console](https://console.hetzner.cloud/)
2. Select your project
3. Navigate to **Security** > **API Tokens**
4. Click **Generate API Token**
5. Select **Read & Write** permissions
6. Copy the generated token (you'll only see it once)

## Git Repository

Edka uses GitOps for deployment, so you'll need a Git repository:

### GitHub

1. Create a [GitHub account](https://github.com/join) if you don't have one
2. Create a new repository for your application
3. Push your application code and Kubernetes manifests to this repository

### GitLab (Coming Soon)

Support for GitLab is coming soon.

## Container Registry

You'll need a container registry to store your application images. Edka supports:

- GitHub Container Registry (recommended with GitHub repositories)
- Docker Hub
- AWS ECR
- Google Artifact Registry

### GitHub Container Registry Setup

1. Enable GitHub Container Registry for your account
2. Generate a Personal Access Token with `write:packages` permission
3. Log in to the registry with `docker login ghcr.io`

## Secrets Management (Optional)

For secure handling of secrets, Edka integrates with several external secrets providers:

- [Doppler](https://www.doppler.com/) (recommended for ease of use)
- [1Password](https://1password.com/)
- [HashiCorp Vault](https://www.vaultproject.io/)
- [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)

## Domain Name (Optional)

If you want to expose your applications to the internet with custom domains:

1. Register a domain with any domain registrar
2. Set up a DNS provider (Cloudflare recommended)
3. Be prepared to configure DNS records to point to your Edka-managed infrastructure

## Next Steps

Once you have all the prerequisites in place, you're ready to [create your first cluster](/get-started/quick-start/)! 