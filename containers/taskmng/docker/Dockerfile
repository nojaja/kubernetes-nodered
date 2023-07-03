ARG ENV=blue
FROM nodered/node-red:latest-minimal

ENV TZ Asia/Tokyo
ENV NODE_RED_ENABLE_PROJECTS false
ENV FLOWS /data/flows.json
ENV PORT 1880

ADD module/nodered/ /data/nodered/