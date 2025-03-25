# Use Node.js 22 as the base image
FROM node:20 AS backend

# Set the working directory for the backend
WORKDIR /app

# Copy package.json and install dependencies
COPY ./Backend/package.json ./Backend/package-lock.json ./
RUN npm install

# Copy the server.js file
COPY ./Backend/server.js .

# Expose port 3000 for the Node.js backend
EXPOSE 3000

# Set the entry point for the backend server
ENTRYPOINT ["node", "server.js"]
