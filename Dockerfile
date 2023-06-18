FROM node:lts-alpine as build-stage

# install simple http server for serving static content
#RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

FROM node:lts-alpine as prod-stage

RUN npm install -g http-server

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/public/favicon.png /app

EXPOSE 8080
CMD ["http-server", "/app"]