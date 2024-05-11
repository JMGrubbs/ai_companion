# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./
# or if you use yarn:
# COPY package.json yarn.lock ./

# Install dependencies
RUN npm install
# or if you use yarn:
# RUN yarn install

# Bundle app source inside Docker image
COPY . .

# Build your app
RUN npm run build

# Install a server to serve your app
RUN npm install -g serve

# Command to run your app
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000 to the outside once the container is running
EXPOSE 3000
