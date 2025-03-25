# Use Node.js 20 for building the Angular app
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy Angular source files
COPY ./Frontend .

# Install dependencies
RUN npm install

# Build the Angular application
RUN npm run build

# Clean up unnecessary files
RUN rm -rf node_modules

# Use Nginx to serve the Angular app
FROM nginx:1.27

# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY ./Frontend/nginx_angular.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
