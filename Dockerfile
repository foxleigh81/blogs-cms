FROM node:16

WORKDIR /srv/app

COPY package*.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 1337

CMD ["node", "server.js"]