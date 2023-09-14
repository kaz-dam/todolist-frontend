# --- Build Stage ---
FROM node:16 AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Production Stage ---
FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
# which takes care of handling routing with React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
