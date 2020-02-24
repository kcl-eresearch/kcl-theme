FROM php:7.2-cli-buster

RUN apt update -y && apt install -y openssh-client git && apt clean
RUN cd /usr/local/bin && curl -LO https://deployer.org/deployer.phar
