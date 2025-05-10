---
title: Add-ons
description: Extend your Kubernetes cluster with one-click add-ons
---

# Add-ons

Edka provides a curated set of add-ons that can be installed with a single click. These add-ons extend the functionality of your Kubernetes cluster, providing databases, ingress controllers, observability tools, and more.

## Available Add-ons

### Databases

| Add-on | Description | Use Case |
|--------|-------------|----------|
| **CloudNative PostgreSQL** | Production-ready PostgreSQL operator | Primary application database |
| **MariaDB** | MySQL-compatible relational database | Legacy applications requiring MySQL |
| **Redis** | In-memory data structure store | Caching, queues, pub/sub |

### Ingress & Networking

| Add-on | Description | Use Case |
|--------|-------------|----------|
| **Nginx Ingress** | NGINX-based ingress controller | HTTP/HTTPS traffic routing |
| **Cert Manager** | TLS certificate automation | Automatic HTTPS with Let's Encrypt |
| **Varnish** | HTTP cache accelerator | Content caching and delivery |

### Monitoring & Observability

| Add-on | Description | Use Case |
|--------|-------------|----------|
| **Prometheus** | Metrics collection and alerting | System and application monitoring |
| **Grafana** | Visualization and dashboards | Metrics visualization |
| **Loki** | Log aggregation | Centralized logging |

### Security & Configuration

| Add-on | Description | Use Case |
|--------|-------------|----------|
| **External Secrets** | Secrets management integration | Secure credentials management |
| **Vault** | HashiCorp Vault for secrets | Advanced secrets management |

### Backup & Recovery

| Add-on | Description | Use Case |
|--------|-------------|----------|
| **Velero** | Cluster and volume backups | Disaster recovery |

## Installing Add-ons

To install an add-on:

1. Navigate to the **Add-ons** tab in your cluster dashboard
2. Browse or search for the add-on you want to install
3. Click on the add-on to view details and configuration options
4. Click **Install** and configure any required parameters
5. Click **Confirm** to complete the installation

Most add-ons are installed within 1-2 minutes.

## Configuration Options

Each add-on has specific configuration options that can be set during installation or modified later:

### Example: CloudNative PostgreSQL

- **Version**: Select PostgreSQL version (12, 13, 14, 15)
- **Resources**: Configure CPU and memory allocation
- **Storage**: Set volume size and storage class
- **High Availability**: Enable/disable replicas
- **Backup**: Configure S3 backup location and schedule

### Example: Nginx Ingress

- **Service Type**: LoadBalancer or NodePort
- **SSL Configuration**: HTTP/HTTPS ports, SSL policy
- **Load Balancing Algorithm**: Round-robin, IP hash, etc.
- **Resource Allocation**: CPU and memory limits

## Managing Add-ons

After installation, you can manage your add-ons:

### Upgrading Add-ons

1. Navigate to the **Add-ons** tab
2. Find the add-on you want to upgrade
3. Click on the **Upgrade** button
4. Select the target version
5. Review changes and click **Confirm**

### Configuring Add-ons

1. Navigate to the **Add-ons** tab
2. Find the add-on you want to configure
3. Click on the **Configure** button
4. Modify settings as needed
5. Click **Save Changes**

### Uninstalling Add-ons

1. Navigate to the **Add-ons** tab
2. Find the add-on you want to uninstall
3. Click on the **Uninstall** button
4. Confirm the uninstallation

> **Warning**: Uninstalling some add-ons (especially databases) may result in data loss. Make sure to back up any important data before uninstalling.

## Add-on Status and Monitoring

Each installed add-on displays status information:

- **Healthy**: The add-on is running correctly
- **Warning**: The add-on has non-critical issues
- **Error**: The add-on has critical issues
- **Updating**: The add-on is being updated

You can click on an add-on to view more detailed status information, logs, and monitoring metrics.

## Creating Custom Add-ons (Advanced)

For advanced users, Edka allows creating custom add-ons using Helm charts:

1. Navigate to **Add-ons** > **Custom Add-ons**
2. Click **Create Custom Add-on**
3. Provide a Helm chart repository URL
4. Configure values and dependencies
5. Save and install

Custom add-ons can be shared with your team and reused across clusters. 