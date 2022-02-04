FROM node:alpine

WORKDIR /var/app

COPY ./package.json ./

RUN npm install

copy . .

CMD ["npm, "start"]