---
title: Quick Start
description: Get started with Edka in under 5 minutes
---

# Quick Start Guide

This guide will help you set up your first Edka cluster and deploy an application in just a few minutes.

## Prerequisites

- A Hetzner Cloud account
- A Hetzner Cloud API token with read/write permissions
- A GitHub or GitLab account (for GitOps deployments)

If you don't have these yet, see our [Prerequisites](/get-started/prerequisites/) page for detailed instructions.

## Step 1: Create an Edka Account

1. Go to [edka.io](https://edka.io/) and click **Create A Free Account**
2. Sign up using your email or GitHub account
3. Verify your email address

## Step 2: Connect Your Hetzner Account

1. In the Edka dashboard, navigate to **Settings** > **Cloud Providers**
2. Click **Add Provider** and select **Hetzner**
3. Enter your Hetzner API token
4. Click **Connect**

Edka will verify your token and establish a connection to your Hetzner account.

## Step 3: Create Your First Cluster

1. In the Edka dashboard, click **Create Cluster**
2. Choose a name for your cluster (e.g., "production")
3. Select a region (e.g., "Falkenstein" or "Helsinki")
4. Choose a cluster size:
   - **Small**: 1 control plane + 2 worker nodes (2 vCPU, 4GB RAM each)
   - **Medium**: 1 control plane + 3 worker nodes (4 vCPU, 8GB RAM each)
   - **Large**: 1 control plane + 4 worker nodes (8 vCPU, 16GB RAM each)
5. Click **Create**

Edka will provision your Kubernetes cluster in about 2 minutes. You'll see real-time updates as the process completes.

## Step 4: Install Add-ons

Once your cluster is ready, you can install add-ons:

1. Navigate to the **Add-ons** tab in your cluster dashboard
2. Browse the available add-ons
3. Click **Install** on the add-ons you need (e.g., PostgreSQL, Nginx Ingress, External Secrets)

## Step 5: Connect Your GitHub Repository

1. Go to the **GitOps** tab
2. Click **Connect Repository**
3. Select your GitHub account and repository
4. Choose the branch to track (e.g., "main")
5. Configure deployment settings:
   - Enable automatic deployments
   - Set up preview environments for pull requests
   - Configure production deployment triggers

## Step 6: Deploy Your Application

With GitOps enabled, deploying your application is as simple as pushing to your repository:

1. Push your application code and Kubernetes manifests to your repository
2. Edka will automatically build, test, and deploy your application
3. Monitor the deployment status in the Edka dashboard

## Next Steps

Now that you have your first cluster running, check out these guides to learn more:

- [Connecting External Secrets](/guides/external-secrets/)
- [Setting Up Custom Domains](/guides/custom-domains/)
- [Monitoring and Observability](/platform-usage/monitoring/)
- [Scaling Your Cluster](/platform-usage/scaling-clusters/) 