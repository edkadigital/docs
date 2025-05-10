---
title: Creating Clusters
description: Learn how to create and manage Kubernetes clusters with Edka
---

# Creating Kubernetes Clusters

This guide explains how to create, manage, and customize Kubernetes clusters using Edka.

## Cluster Creation

### Step 1: Navigate to the Clusters Page

In the Edka dashboard, click on **Clusters** in the main navigation, then click the **Create Cluster** button.

### Step 2: Configure Basic Settings

1. **Name**: Choose a name for your cluster (e.g., `production`, `staging`, `dev`)
2. **Description** (optional): Add a description to help identify the cluster's purpose
3. **Region**: Select a Hetzner region:
   - **EU**: Falkenstein (FSN1), Nuremberg (NBG1), Helsinki (HEL1)
   - **US**: Ashburn (ASH)

### Step 3: Configure Cluster Size

Select a predefined size or create a custom configuration:

#### Predefined Sizes

- **Small**: Suitable for development and small production workloads
  - 1 control plane node (CX21): 2 vCPU, 4GB RAM
  - 2 worker nodes (CX21): 2 vCPU, 4GB RAM each
  - Total: 6 vCPU, 12GB RAM

- **Medium**: Suitable for most production workloads
  - 1 control plane node (CX31): 4 vCPU, 8GB RAM
  - 3 worker nodes (CX31): 4 vCPU, 8GB RAM each
  - Total: 16 vCPU, 32GB RAM

- **Large**: Suitable for resource-intensive applications
  - 1 control plane node (CX41): 8 vCPU, 16GB RAM
  - 4 worker nodes (CX41): 8 vCPU, 16GB RAM each
  - Total: 40 vCPU, 80GB RAM

#### Custom Configuration

For custom configurations, you can:
- Select the number and type of worker nodes
- Add dedicated nodes for specific workloads
- Configure autoscaling parameters

### Step 4: Advanced Options

Expand the **Advanced Options** section to configure:

- **Kubernetes Version**: Choose a specific K3s version (default: latest stable)
- **Network CIDR**: Configure custom network CIDR ranges
- **Add-ons**: Pre-select add-ons to install during cluster creation
- **Placement Groups**: Configure high-availability placement across datacenter zones

### Step 5: Create the Cluster

Click **Create Cluster** to start the provisioning process. Cluster creation typically takes 2-5 minutes, depending on the configuration.

## Cluster Status

The cluster status page shows:

- **Overview**: Basic cluster information and health status
- **Nodes**: List of all nodes with their status, resources, and metrics
- **Add-ons**: Installed add-ons and their status
- **Metrics**: CPU, memory, and network usage
- **Events**: Recent events and activities

## Cluster Management

### Scaling Clusters

1. Navigate to the cluster's detail page
2. Click on the **Scale** tab
3. Adjust the number of worker nodes
4. Click **Apply Changes**

Scaling operations typically take 1-3 minutes to complete.

### Upgrading Clusters

1. Navigate to the cluster's detail page
2. Click on the **Upgrade** tab
3. Select the target Kubernetes version
4. Click **Start Upgrade**

Upgrades are performed in a rolling fashion to minimize downtime.

### Deleting Clusters

1. Navigate to the cluster's detail page
2. Click the **Settings** tab
3. Scroll to the bottom and click **Delete Cluster**
4. Confirm the deletion by typing the cluster name

> **Warning**: Cluster deletion is irreversible and will delete all associated resources, including volumes and load balancers. Make sure to back up any important data before deleting a cluster.

## Next Steps

After creating your cluster, you can:

- [Install add-ons](/platform-usage/add-ons/) to extend your cluster's functionality
- [Set up GitOps deployments](/platform-usage/gitops-deployments/) for CI/CD
- [Configure monitoring and alerts](/platform-usage/monitoring/) to keep track of your cluster's health 