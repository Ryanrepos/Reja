FROM node:18.20.4

COPY . /reja
WORKDIR /reja
CMD npm install && node sever.js

# DOCKERFILE => DOCKER IMAGE => DIRECT DOCKER: CONTAINER
# DOCKERFILE => DOCKER IMAGE => DOCKER-COMPOSE: CONTAINER



