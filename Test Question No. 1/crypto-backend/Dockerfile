# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY package*.json ./

# Install any needed packages specified in package*.json
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle your app's source code inside the Docker image
COPY . .

# Build the NestJS app
RUN npm run build

# Map port 3000 to the outside world (the port your app runs on)
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "dist/main"]
