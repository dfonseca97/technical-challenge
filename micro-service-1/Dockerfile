FROM node:8-slim

WORKDIR /micro-service-1
COPY . .
RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "serve" ]