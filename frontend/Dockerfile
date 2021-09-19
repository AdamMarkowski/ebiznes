FROM ubuntu:18.04

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y curl zip unzip gnupg2

ENV NODE_VERSION=16.1.0
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN useradd -ms /bin/bash ebiznes && adduser ebiznes sudo

WORKDIR /home/ebiznes/project
COPY . /home/ebiznes/project

RUN npm install
EXPOSE 3000 3000
CMD npm start
