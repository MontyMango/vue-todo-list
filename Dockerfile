# Build stage
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# You cannot change port 80 here, you have to do it on the docker-compose.yaml file!!!
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]