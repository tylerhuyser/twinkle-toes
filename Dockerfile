FROM node:18

WORKDIR /app

COPY package*.json ./
COPY server.js ./ 
COPY routes ./routes
COPY controllers ./controllers
COPY db ./db

RUN npm install --production

COPY . .

EXPOSE 3000

# CMD ["npm", "start"]
# Start the backend server
CMD ["node", "server.js"]
