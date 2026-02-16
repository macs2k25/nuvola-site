FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
# QUI AGGIUNGIAMO LA BUILD PER NEXT.JS
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
