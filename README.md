# kubernetes-nodered

##
```
docker build -t sshd:latest .
```
##
```
kubectl apply -f ./nodered_persistent_volume.yaml
kubectl apply -f ./nodered_pvc.yaml
```
## 状況取得
```
kubectl get svc,pod,pv,pvc
kubectl logs nodered-deployment-555ddd579f-r4wts
kubectl get events --sort-by='.metadata.creationTimestamp' -A
kubectl describe pod
```

## 更新
```
kubectl apply -f ./nodered_cluster.yaml
kubectl apply -f ./sshd.yaml
```

## 構成情報取得
```
kubectl get Service nodered-service -o yaml
```

## 削除
```
kubectl delete -f ./nodered_cluster.yaml
```

```
kubectl exec -it nodered-deployment-555ddd579f-r4wts -c nodered-server -- sh
```

# 手元のマシンから Kubernetes Pod にファイルをアップロードする
```
tar cvfz node_modules.tgz ./node_modules
kubectl cp ./node_modules.tgz nodered-deployment-574b64d5fd-64fzk:/workspace/node_modules.tgz
```

# Kubernetes Pod にあるファイルを手元のマシンにダウンロードする
```
kubectl cp nodered-deployment-574b64d5fd-64fzk:/workspace/node_modules.tgz ./node_modules.tgz
tar xvfz /workspace/node_modules.tgz
```

```
kubectl port-forward nodered-deployment-679b5cf798-g85lw 1880:1880
kubectl port-forward nodered-deployment-679b5cf798-j9f8d 1881:1880
kubectl port-forward nodered-deployment-679b5cf798-vr5fh 1882:1880

```