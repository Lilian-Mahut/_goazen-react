# frontend:desktop/Dockerfile
FROM node:18-alpine

RUN npm install
CMD ["npm", "start"]
RUN npm run build
EXPOSE 80