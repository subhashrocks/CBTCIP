
FROM node:16.14.2-buster-slim
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]