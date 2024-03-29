FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

WORKDIR /usr/src/app/server

RUN npm install

EXPOSE 80

CMD [ "npm", "run", "start" ]