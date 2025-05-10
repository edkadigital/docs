---
title: Monitoring & Observability
description: Monitor your Kubernetes clusters and applications with Edka
---

# Monitoring & Observability

Edka provides built-in monitoring and observability tools to help you understand the health and performance of your clusters and applications.

## Overview Dashboard

The main dashboard provides a high-level overview of your cluster's health:

- **Cluster Status**: Overall health and readiness
- **Node Metrics**: CPU, memory, and disk utilization across all nodes
- **Workload Status**: Health of deployments, pods, and services
- **Recent Events**: Latest cluster events and alerts

## Detailed Metrics

### Infrastructure Metrics

Edka collects and displays the following infrastructure metrics:

- **Node CPU Usage**: CPU utilization per node
- **Node Memory Usage**: Memory utilization per node
- **Disk I/O**: Read/write operations and throughput
- **Network Traffic**: Ingress/egress traffic per node
- **Node Health**: Node conditions and readiness

### Application Metrics

For your applications, Edka collects:

- **Pod CPU and Memory**: Resource utilization per pod
- **Request Rates**: HTTP request volume
- **Latency**: Response times for HTTP requests
- **Error Rates**: Failed request percentages
- **Throughput**: Requests per second

## Monitoring Add-ons

Edka integrates with several monitoring tools, available as one-click add-ons:

### Prometheus

Prometheus is the core metrics collection system used by Edka. It's pre-installed on all clusters and configured to collect standard metrics.

To access the Prometheus UI:

1. Navigate to **Monitoring** > **Metrics**
2. Click **Open Prometheus**

### Grafana

Grafana provides visualizations and dashboards for your metrics. To install Grafana:

1. Navigate to **Add-ons**
2. Find and install the Grafana add-on

Edka includes pre-configured Grafana dashboards for:
- Node exporter metrics
- Kubernetes cluster overview
- Pod resources
- Persistent volumes

### Loki

Loki is a log aggregation system that works well with Grafana. To install Loki:

1. Navigate to **Add-ons**
2. Find and install the Loki add-on

Once installed, Loki collects logs from all containers in your cluster, allowing you to:
- Search logs across all applications
- Create log-based alerts
- Correlate logs with metrics

## Alerts

Edka includes a built-in alerting system that can notify you of critical issues:

### Default Alerts

Edka configures several default alerts:

- **Node Not Ready**: A node has become unhealthy
- **High CPU Usage**: Sustained high CPU utilization
- **Memory Pressure**: Nodes running low on available memory
- **Disk Space Low**: Nodes running out of disk space
- **Pod Crash Looping**: Pods repeatedly crashing

### Custom Alerts

To create custom alerts:

1. Navigate to **Monitoring** > **Alerts**
2. Click **Create Alert Rule**
3. Define the alert conditions:
   - Metric or expression to evaluate
   - Threshold values
   - Duration (how long the condition must persist)
   - Severity level
4. Configure notification channels
5. Click **Save Rule**

### Notification Channels

Edka supports multiple notification channels:

- Email
- Slack
- PagerDuty
- Webhook

To configure a notification channel:

1. Navigate to **Monitoring** > **Notification Channels**
2. Click **Add Channel**
3. Select the channel type
4. Enter the required configuration
5. Test the channel
6. Click **Save**

## Logging

In addition to metrics, Edka provides centralized logging:

### Viewing Logs

To view logs for your applications:

1. Navigate to **Monitoring** > **Logs**
2. Use filters to narrow down by:
   - Namespace
   - Pod/Container
   - Time range
   - Log level
   - Text search

### Log Retention

By default, Edka retains logs for:

- **Infrastructure logs**: 14 days
- **Application logs**: 7 days

You can adjust these settings in **Monitoring** > **Settings** > **Log Retention**.

### Exporting Logs

For long-term storage or analysis, you can export logs to external systems:

- S3-compatible storage
- Elasticsearch
- Custom HTTP endpoints

## Custom Monitoring

### Instrumenting Applications

For best results, instrument your applications to expose Prometheus metrics:

1. Add a metrics endpoint to your application (typically `/metrics`)
2. Use client libraries for your programming language
3. Expose key business and technical metrics
4. Edka will automatically discover and scrape these endpoints

### Custom Dashboards

To create custom dashboards:

1. Navigate to **Monitoring** > **Dashboards**
2. Click **Create Dashboard**
3. Add panels with metrics queries
4. Organize and save your dashboard

You can also import existing Grafana dashboards from the community.

## Cost Monitoring

Edka includes cost monitoring to help you track and optimize your cloud spending:

- **Per-Node Costs**: Cost breakdown by node
- **Namespace Costs**: Costs attributed to each namespace
- **Workload Costs**: Costs attributed to specific workloads
- **Historical Trends**: Cost trends over time

Access cost reports in **Monitoring** > **Cost Reports**. 