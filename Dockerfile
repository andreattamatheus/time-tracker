# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /var/www

RUN npm install -g @vue/cli

# Expose the port that the app will run on
EXPOSE 8080

# Command to keep the container alive
CMD ["tail", "-f", "/dev/null"]