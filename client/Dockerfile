# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]

