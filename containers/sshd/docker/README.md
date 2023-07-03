# eg_sshd

SSHd サービスがセットアップされたコンテナイメージ。  
これは他のコンテナ用ボリュームの調査や、テスト用コンテナに対する迅速なアクセスを提供します。

## Reference
[SSH デーモン用サービスの Docker 化](https://docs.docker.jp/engine/examples/running_ssh_service.html)
[Dockerfile のベスト・プラクティス](https://docs.docker.jp/develop/develop-images/dockerfile_best-practices.html#id33)

## develop
```
cd .
docker build -t nojaja/eg_sshd:latest .
docker image ls

```

## How to use
root:root
