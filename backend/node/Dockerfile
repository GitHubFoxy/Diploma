FROM node:alpine3.18

WORKDIR /node

COPY package*.json ./

RUN npm install

USER node

COPY --chown=node:node . ./

EXPOSE 3001

CMD ["node", "index.js"] 
