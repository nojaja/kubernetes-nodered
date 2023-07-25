ARG ENV=blue
FROM nodered/node-red:latest-minimal

ENV TZ Asia/Tokyo
ENV NODE_RED_ENABLE_PROJECTS false
#ENV FLOWS /data/job-cluster/jobflows.json
ENV FLOWS /data/flows.json
ENV LOGPATH /data/logs
ENV PORT 1888
ENV JOBCTL_SERVICE_NAME nodered-service
ENV JOBCTL_SERVICE_PORT 18081
ENV CLUSTER_GROUP default
ENV CLUSTER_ROLE jobctl
#ENV NODE_PATH $NODE_PATH:/data/node_modules

#ADD module/job-cluster/ /data/job-cluster
ADD config/settings.js /usr/src/node-red/node_modules/node-red/settings.js