FROM node:11.4.0

MAINTAINER Alexandre B. DeFreitas <alexdf5152@gmail.com>

ADD . /var/www/srv

WORKDIR /var/www/srv

RUN npm install
RUN chmod +x ./test/test.sh
RUN ./test/test.sh

CMD ["nodejs", "server.js"]

