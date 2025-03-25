# Use Node.js as base
FROM node:20 AS backend

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (cache optimization)
COPY ./Backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY ./Backend .

# Expose port 3000
EXPOSE 3000

# Start the backend
CMD ["node", "server.js"]
