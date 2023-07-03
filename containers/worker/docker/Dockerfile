ARG ENV=blue
FROM nodered/node-red:latest-minimal

ENV TZ Asia/Tokyo
ENV NODE_RED_ENABLE_PROJECTS false
ENV FLOWS /data/job-cluster/flows.json
ENV PORT 1888
ENV SERVICENAME nodered-service
ENV CLUSTER_GROUP default
ENV CLUSTER_ROLE worker
ENV TOPICS topic1
ENV FLOW_MAX 1

ADD module/job-cluster/ /data/job-cluster/