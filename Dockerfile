FROM node:22
COPY package.json .
RUN npm install
#RUN npm install express mysql2
COPY server.js /app/
WORKDIR /app
EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
