# Use Node.js 20 for building the Angular app
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY ./package.json ./package-lock.json ./
RUN npm install

# Copy the rest of the application files and build the Angular app
COPY . /app
RUN npm run build --prod

# Serve the Angular application using Nginx
FROM nginx:1.27

# Copy the build output from the previous stage into the Nginx folder
COPY --from=build /app/dist/backoffice-adminmns/browser /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY ./nginx_angular.conf /etc/nginx/nginx.conf

# Expose port 80 for Nginx to serve the frontend
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
