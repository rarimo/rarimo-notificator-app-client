FROM node:20.18.0-alpine AS builder
RUN apk --no-cache --update --virtual build-dependencies add \
    python3 \
    make \
    g++

ARG BUILD_VERSION
WORKDIR /build
COPY package*.json ./
COPY yarn*.lock ./
RUN yarn install
COPY . .
RUN VITE_APP_BUILD_VERSION="$BUILD_VERSION" yarn build

FROM nginx:1.20.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /build/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
