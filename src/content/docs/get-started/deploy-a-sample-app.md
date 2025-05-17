---
title: Deploy A Sample Application
description: Deploy the "StartMeUp" sample application to your Edka cluster.
---

This guide walks you through deploying the [StartMeUp](https://github.com/edkadigital/startmeup) sample application to your Edka cluster. "StartMeUp" is a Go-based SaaS starter kit, packaged as a Helm chart. It serves as a foundational example that you can adapt and extend for your specific requirements.

**Important**

To get it working, you have to fork the [StartMeUp](https://github.com/edkadigital/startmeup) repo and make the necessary changes (e.g., update with your container registry and ingress endpoint) to push the image and helm chart to your own GitHub Container Registry.

## Prerequisites

- You have completed the steps in [Build Your Own PaaS](/get-started/build-your-own-paas/), which sets up your Edka cluster, PostgreSQL, GitHub integration, Container Registry and Doppler integration.
- You have your GitOps repository (e.g., [edkadigital/blueprint](https://github.com/edkadigital/blueprint)) cloned locally.
- [StartMeUp](https://github.com/edkadigital/startmeup) is forked to your own GitHub account and configured to push the image and helm chart to your own GitHub Container Registry
- You have access to a Doppler project where you can manage secrets for the application.

## 1. Prepare Application Secrets in Doppler

The "StartMeUp" application requires two secrets to function correctly:

1.  `DATABASE_URL`: The connection string for the PostgreSQL database.
2.  `ENCRYPTION_KEY`: A random string used by the application for data encryption.

Create these secrets in your Doppler project associated with this application:

- **`DATABASE_URL`**:

  ```
  postgresql://clusterone:<YOUR_POSTGRES_PASSWORD>@clusterone-rw.postgres.svc.cluster.local:5432/clusterone?sslmode=disable
  ```

  Replace `<YOUR_POSTGRES_PASSWORD>` with the actual `POSTGRES_USER_PASSWORD` you configured during the [Cloud-Native PostgreSQL setup](/get-started/build-your-own-paas/#cloud-native-postgres).

- **`ENCRYPTION_KEY`**:
  Generate a secure, long random string. For example, using OpenSSL:
  ```bash
  openssl rand -hex 32
  ```
  An example key: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6`

![Doppler project showing DATABASE_URL and ENCRYPTION_KEY secrets](https://assets.edka.io/ek_doppler_app.webp)

## 2. Configure GitOps for the Application

We will add two FluxCD custom resources to your GitOps repository:

- A `HelmRelease` to deploy the application using its private Helm chart.
- A `Kustomization` to manage the `HelmRelease` dependency on other resources, like the External Secrets Operator and PostgreSQL, ensuring they are ready before the application attempts to deploy.

### a. Create Application Manifest Directory

In your local clone of the GitOps repository, create the directory where the application's manifests will reside:

```bash
mkdir -p clusters/resources/clusterone/app
```

### b. Define the HelmRelease

This resource tells Flux to deploy the "StartMeUp" application using its Helm chart and configure it to automaticaly deploy when the chart is updated.

Create a file named `startmeup-helmrelease.yaml` in the `clusters/resources/clusterone/app/` directory:

```yaml
# clusters/resources/clusterone/app/startmeup-helmrelease.yaml
apiVersion: helm.toolkit.fluxcd.io/v2
kind: HelmRelease
metadata:
  name: startmeup # Name of the HelmRelease object
  namespace: production # Namespace where the application will be deployed
spec:
  interval: 5m # Reconciliation interval for the HelmRelease
  chart:
    spec:
      chart: startmeup # Name of the Helm chart
      version: ">=0.0.1" # Use the latest available version (or pin to a specific one)
      sourceRef:
        kind: HelmRepository
        name: edka # Assumes a HelmRepository named 'edka' exists
        namespace: flux-system # Namespace where the HelmRepository is located
      interval: 1m # How often to check for new chart versions
  upgrade:
    remediation:
      remediateLastFailure: true # Attempt to fix failed upgrades
  test:
    enable: true # Run Helm tests after deployment/upgrade
```

### c. Define the Kustomization for the Application

This `Kustomization` resource tells Flux to manage the `HelmRelease` within the `clusters/resources/clusterone/app/` directory and respect its dependecies.

Create a file named `startmeup-kustomization.yaml` in the `clusters/clusterone/` directory of your GitOps repository:

```yaml
# clusters/clusterone/startmeup-kustomization.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata:
  name: startmeup # Unique name for this Kustomization object
  namespace: flux-system # Namespace where this Kustomization object itself resides
spec:
  dependsOn:
    # Ensures that the External Secrets Operator and its Doppler integration are ready
    - name: cluster-secrets-store
    # Ensures that PostgreSQL is set up and ready before attempting to deploy the app
    - name: postgres-cluster
  interval: 5m # How often Flux reconciles this Kustomization
  retryInterval: 2m
  timeout: 5m # Max time to wait for all resources to become ready
  wait: true # Wait for all resources defined in the path to be ready
  path: "./clusters/resources/clusterone/app" # Path to the application's manifests
  prune: true # Delete resources removed from the Git repository path
  sourceRef:
    kind: GitRepository
    name: flux-system # Refers to the GitRepository object for your main GitOps repo
```

## 3. Commit and Push Changes

Commit the new manifest files to your GitOps repository and push the changes:

```bash
git add clusters/clusterone/startmeup-kustomization.yaml
git add clusters/resources/clusterone/app/startmeup-helmrelease.yaml
git commit -m "Deploy StartMeUp application"
git push
```

Flux will detect these changes and begin the deployment process.

## 4. Verify Deployment

You can monitor the synchronization and deployment status using Flux CLI commands:

```bash
# Verify the status of the Kustomizations in your cluster
$ kubectl get kustomizations --all-namespaces
NAMESPACE     NAME                    AGE    READY   STATUS
flux-system   cluster-secrets-store   143m   True    Applied revision: refs/heads/main@sha1:9b7f9549a89e559efc4e98c743e8703cb52d47d4
flux-system   flux-system             143m   True    Applied revision: refs/heads/main@sha1:9b7f9549a89e559efc4e98c743e8703cb52d47d4
flux-system   postgres-cluster        143m   True    Applied revision: refs/heads/main@sha1:9b7f9549a89e559efc4e98c743e8703cb52d47d4
flux-system   shared-components       143m   True    Applied revision: refs/heads/main@sha1:9b7f9549a89e559efc4e98c743e8703cb52d47d4
flux-system   startmeup               2m7s   True    Applied revision: refs/heads/main@sha1:9b7f9549a89e559efc4e98c743e8703cb52d47d4
```

```bash
# Check the application pods
$ kubectl get pods -n production -l app=startmeup
NAME                         READY   STATUS    RESTARTS   AGE
startmeup-684dccb9fc-gm7j4   1/1     Running   0          2m34s
startmeup-684dccb9fc-vg8g5   1/1     Running   0          2m34s
```

```bash
# Check the application ingress and access it
$ kubectl get ing -n production
NAME               CLASS   HOSTS              ADDRESS                                                        PORTS     AGE
go.startmeup.dev   nginx   go.startmeup.dev   7d4bd02c-7f89-4898-a8da-8f6e69fc525d.fsn1.customers.edka.net   80, 443   4m13s
```

You can now access the application at the domain you configured in the Ingress resource.

![StartMeUp](https://assets.edka.io/ek_startmeup.webp)
