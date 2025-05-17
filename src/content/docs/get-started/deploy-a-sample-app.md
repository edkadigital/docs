---
title: Deploy A Sample Application
description: Deploy a sample application to your Edka cluster
---
Deploy a sample application to your Edka cluster.

## Prerequisites
- Installed Add-ons and configurations from previous steps (see [Build Your Own PaaS](/get-started/build-your-own-paas/))

## Deploy your first application
In this example we'll use a preconfigured sample application to demonstrate how to deploy an application on your Edka cluster. The sample application is a Go-based SaaS starter kit that provides a simple web application with a PostgreSQL database backend. It is part of a more complex example, a complete SaaS starter kit, which is available on GitHub [edkadigital/startmeup](https://github.com/edkadigital/startmeup).

The repo already builds a Docker image and pushes it to the GitHub Container Registry and packs the application into a Helm chart.

We'll deploy the sample application to your Edka cluster and enable automatic updates when a new Helm release is available.


The application requires a PostgreSQL database, which is already set up in the previous steps. The application will connect to the database using the credentials provided in the `values.yaml` file.

The application expects 2 secrets to work correctly. We'll create both in Doppler.
```
1. DATABASE_URL = postgresql://clusterone:your_secret@clusterone-rw.postgres.svc.cluster.local:5432/clusterone?sslmode=disable
2. ENCRYPTION_KEY = a_long_random_string (e.g. a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6)
```
![Secrets](https://assets.edka.io/ek_doppler_app.webp)

Let's add the app in our Git repo
Save the following YAML file as `startmeup-release.yaml` in the `clusters/clusterone` directory of your GitOps repository.
```yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata:
  name: startmeup-release
  namespace: flux-system
spec:
  dependsOn:
    - name: cluster-secrets-store
    - name: postgres-cluster
  interval: 3m
  retryInterval: 2m0s
  wait: true
  path: "./clusters/resources/clusterone/app"
  prune: true
  sourceRef:
    kind: GitRepository
    name: flux-system
```
Now create the `app` directory in the `clusters/resources/clusterone/` directory and save the following YAML file as `startmeup-release.yaml` in that directory.
```yaml
apiVersion: helm.toolkit.fluxcd.io/v2
kind: HelmRelease
metadata:
  name: startmeup
  namespace: production
spec:
  interval: 1m
  chart:
    spec:
      chart: startmeup
      version: ">=0.0.1"
      sourceRef:
        kind: HelmRepository
        name: startmeup
        namespace: flux-system
      interval: 1m
  upgrade:
    remediation:
      remediateLastFailure: true
  test:
    enable: true
```


Replace `your_secret` with the actual `POSTGRES_USER_PASSWORD` secret you created in the [previous steps](/get-started/build-your-own-paas/#cloud-native-postgres).