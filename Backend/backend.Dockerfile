# Use Node.js 20 as the base image
FROM node:20 AS backend

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to improve caching)
COPY ./Backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files
COPY ./Backend .

# Expose the backend port
EXPOSE 3000

# Run the backend server
CMD ["node", "server.js"]
