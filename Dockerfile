
# ---- Базовый Node ----
FROM node:carbon AS base
# Создать директорию app
WORKDIR /app

FROM base AS dependencies  
# Используется символ подстановки для копирования как package.json, так и package-lock.json
COPY package.json ./
COPY client/package.json ./client
COPY server/package.json ./server
# Установить зависимости приложения, включая предназначенные для разработки ('devDependencies')
CMD [ "npm install yarn", "yarn install", "cd ./client", "yarn install", "yarn build" ]


FROM node:alpine AS release  
# Создать директорию app
WORKDIR /app
# Необязательно
# RUN npm -g install serve
COPY --from=dependencies /app/package.json ./
# # Установить зависимости приложения
# RUN npm install --only=production
COPY --from=dependencies /app/client/build ./client/build
COPY --from=dependencies /app/server ./server

# CMD ["serve", "-s", "dist", "-p", "8080"]
CMD ["node", "server/app.js"]
