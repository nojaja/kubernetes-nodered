ARG ENV=blue
FROM nodered/node-red:latest-minimal

ENV TZ Asia/Tokyo
ENV NODE_RED_ENABLE_PROJECTS false
ENV FLOWS /data/flows.json
ENV PORT 1880
ENV LOGPATH /data/logs
#ENV NODE_PATH $NODE_PATH:/data/node_modules

#ADD module/nodered/ /data/nodered/
ADD config/settings.js /usr/src/node-red/node_modules/node-red/settings.js