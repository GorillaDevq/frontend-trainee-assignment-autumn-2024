FROM node:20-alpine

WORKDIR /json-server

RUN npm install -g json-server

COPY ./json-server/db.json /json-server/db.json

EXPOSE 3000

CMD ["json-server", "--watch", "db.json", "--port", "3000"]
