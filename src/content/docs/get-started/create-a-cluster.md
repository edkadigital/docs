---
title: Create Your First Cluster
description: Create your first Edka cluster in 2 minutes
---

This guide will help you set up your first Edka cluster.

## Prerequisites

- A Hetzner Cloud account
- A Hetzner Cloud API token with read/write permissions
- [Kubectl](https://kubernetes.io/docs/tasks/tools/) (Kubernetes CLI - only necessary for advanced operations)
- [Lens](https://k8slens.dev/) - a Kubernetes IDE (optional but recommended for managing your cluster visually)

If you don't have these yet, see our [Prerequisites](/get-started/prerequisites/) page for detailed instructions.

**Note:** _Kubernetes knowledge is not required to use Edka, but it can be helpful for advanced operations._

## Step 1: Create an Edka Account

1. Go to [console.edka.io](https://console.edka.io/signup) and click **Create Account**
2. Sign up using your email or Google account
3. Verify your email address

## Step 2: Connect Your Hetzner Account

1. In the Edka dashboard, navigate to **Integrations** > **Hetzner**
2. Enter your Hetzner API token
3. Click **Save**

Edka will verify your token and establish a connection to your Hetzner account.</br>
We'll store your token encrypted and use it to create and manage your clusters.</br>
You also have the option to use a temporary Hetzner token (not stored) during cluster provisioning. All future operations will require to provide the same token to interact with your Hetzner account.

## Step 3: Create Your First Cluster

1. In the Edka dashboard, navigate to **Clusters**
2. Choose a name for your cluster (e.g., "clusterone")
3. Click **Create Cluster**

![Provision Cluster](https://assets.edka.io/ek_create_cluster.webp)

Optional settings:

- Cluster location (e.g. Nuremberg)
- Kubernetes version (e.g., _1.32.1-k3s1_)
- Instance type for control plane and node pools (e.g., CX21)
- Set a highly available control plane (recommended for production)
- Customize the network settings in the _Network_ tab
- Choose the number of instances and node pools in the _Node Pools_ tab
- Use temporary Hetzner token (not stored) or store the token for future operations

Edka will provision your Kubernetes cluster in about 2 minutes. You'll see progress as the process completes.

![Cluster Progress](https://assets.edka.io/ek_cluster.webp)

## Step 4: Access Your Cluster

1. In the **Clusters** dashboard, click on your cluster name
2. Click **Download Kubeconfig** tab

Set the `KUBECONFIG` environment variable to point to the downloaded file:

```bash
export KUBECONFIG=/path/to/your/kubeconfig.yaml
```

Verify the connection to your cluster:

```bash
kubectl get nodes
```

You should see a list of nodes in your cluster:

```bash
NAME                         STATUS   ROLES                       AGE     VERSION
one-master1                  Ready    control-plane,etcd,master   2m30s   v1.32.1-k3s1
one-pool-default-worker1     Ready    worker                      1m45s   v1.32.1-k3s1
one-pool-default-worker2     Ready    worker                      1m45s   v1.32.1-k3s1
```

Alternatively, you can use [Lens](https://k8slens.dev/) to manage your cluster visually. Just add the kubeconfig file to Lens and connect to your cluster.

## Next Steps

Now that you have your first cluster running, let's set up some add-ons to transform it into a full-fledged PaaS:

- [Build Your Own PaaS](/get-started/build-your-own-paas/)
- [Deploy A Sample Application](/get-started/deploy-a-sample-app/)
