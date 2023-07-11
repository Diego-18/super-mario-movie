FROM node:18

WORKDIR /app

RUN npm install esbuild-linux-64

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "run", "dev"]
