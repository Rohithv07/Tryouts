# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the build output to Nginx's html directory
COPY --from=builder /app/dist /usr/share/nginx/html
# Copy custom Nginx config (we will create this next)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Cloud Run expects the app to listen on the PORT environment variable
# But Nginx listens on 80 by default, which Cloud Run maps automatically.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
