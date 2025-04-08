FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./

RUN npm install

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "dev:docker"]