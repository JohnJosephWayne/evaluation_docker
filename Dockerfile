FROM node:22
COPY package.json .
#RUN npm install -y
#RUN npm install express mysql2 -y
COPY server.js .
EXPOSE 3000
ENTRYPOINT npm start