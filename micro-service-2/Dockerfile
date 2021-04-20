FROM node:8-slim

WORKDIR /micro-service-2
COPY . .
RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "serve" ]