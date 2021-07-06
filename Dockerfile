FROM ubuntu:18.04

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y curl gnupg2 wget git

## Java 8
RUN apt-get install -y openjdk-8-jdk

## Scala 2.12
RUN wget https://downloads.lightbend.com/scala/2.12.3/scala-2.12.3.deb
RUN dpkg -i scala-2.12.3.deb

## SBT
# RUN echo "deb https://dl.bintray.com/sbt/debian /" | tee -a /etc/apt/sources.list.d/sbt.list
# RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
# RUN apt-get update
# RUN apt-get install -y sbt

RUN echo "deb https://repo.scala-sbt.org/scalasbt/debian /" | tee -a /etc/apt/sources.list.d/sbt.list
RUN curl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | apt-key add
RUN apt-get update
RUN apt-get install -y sbt

## Npm
RUN apt-get install -y npm

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
VOLUME . /usr/src/app

EXPOSE 8000
