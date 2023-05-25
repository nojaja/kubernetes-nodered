FROM ubuntu:18.04

ENV LC_ALL C.UTF-8

# Install SSH server
RUN apt-get update && \
    apt-get install -y --no-install-recommends openssh-server && \
    rm -rf /var/lib/apt/lists/* && \
    echo "root:root" | chpasswd && \
    sed -i "s/#PermitRootLogin prohibit-password/PermitRootLogin yes/" /etc/ssh/sshd_config


ADD  start.sh  /usr/local/bin/
RUN  chmod +x /usr/local/bin/start.sh

EXPOSE 22
#CMD service ssh start && /bin/bash
#ENTRYPOINT ["sh", "-c","tail -f /dev/null"]
#CMD sh -c tail -f /dev/null
ENTRYPOINT ["/usr/local/bin/start.sh"]