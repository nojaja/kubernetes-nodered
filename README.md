# kubernetes-nodered

## build sshd
```
docker build -t sshd:latest ./containers/sshd/docker
```

## Create pvc
```
kubectl create namespace sample
```

## Create pvc
```
kubectl -n sample apply -k deployments/pvc/base
```

## 状況取得
```
kubectl -n sample get svc,pod,pv,pvc
kubectl -n sample logs nodered-deployment-555ddd579f-r4wts
kubectl -n sample get events --sort-by='.metadata.creationTimestamp' -A
kubectl -n sample describe pod
```

## 更新
```
kubectl -n sample apply -k deployments/jobctl/base
kubectl -n sample apply -k deployments/worker/base
kubectl -n sample apply -k deployments/sshd/base
```

## 構成情報取得
```
kubectl kustomize deployments/jobctl/base
kubectl kustomize deployments/worker/base
kubectl kustomize deployments/sshd/base
```

## 削除
```
kubectl -n sample delete -k deployments/jobctl/base
kubectl -n sample delete -k deployments/worker/base
kubectl -n sample delete -k deployments/sshd/base

```

```
kubectl -n sample exec -it nodered-deployment-555ddd579f-r4wts -c nodered-server -- sh
```

# 手元のマシンから Kubernetes Pod にファイルをアップロードする
```
tar cvfz node_modules.tgz ./node_modules
kubectl -n sample cp ./node_modules.tgz nodered-deployment-574b64d5fd-64fzk:/workspace/node_modules.tgz
```

# Kubernetes Pod にあるファイルを手元のマシンにダウンロードする
```
kubectl -n sample cp nodered-deployment-574b64d5fd-64fzk:/workspace/node_modules.tgz ./node_modules.tgz
tar xvfz /workspace/node_modules.tgz
```

```
kubectl -n sample port-forward nodered-deployment-679b5cf798-g85lw 1880:1888
kubectl -n sample port-forward nodered-deployment-679b5cf798-j9f8d 1881:1888
kubectl -n sample port-forward nodered-deployment-679b5cf798-vr5fh 1882:1880

```