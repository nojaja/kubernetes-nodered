ARG ENV=blue
FROM nodered/node-red:latest-minimal

ENV TZ Asia/Tokyo
ENV NODE_RED_ENABLE_PROJECTS false
ENV FLOWS /data/job-cluster/jobflows.json
ENV PORT 1888
ENV UDPPORT 2888
ENV SERVICENAME nodered-service
ENV CLUSTER_GROUP default
ENV CLUSTER_ROLE worker
ENV TOPICS topic1
ENV FLOW_MAX 1
ENV NODE_PATH $NODE_PATH:/data/node_modules

ADD module/job-cluster/ /data/job-cluster/