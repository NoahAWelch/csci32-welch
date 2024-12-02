#FROM node:alpine
#COPY . .
#WORKDIR /app/csci32-nextjs-welch
#RUN npm i
#COPY package*.json ./
#EXPOSE 3000
#CMD ["npm", "start"]
# Use an official Node.js runtime as a parent image

FROM node:alpine

# Set the working directory in the container
WORKDIR /apps/csci32-welch

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies

RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application

RUN npm run build

# Expose port 3000
EXPOSE 3308

# Start the Next.js app
CMD ["npm", "run", "start"]
