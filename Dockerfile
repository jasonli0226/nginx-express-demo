FROM node:stretch-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
RUN ls -al

EXPOSE 8080

CMD [ "node", "build/server.js" ]
