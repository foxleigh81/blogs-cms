FROM node:16

WORKDIR /srv/app

COPY package*.json .
COPY yarn.lock .

RUN yarn install --production --platform=linux --arch=x64

COPY . .

EXPOSE 1337

CMD ["yarn", "develop"]
