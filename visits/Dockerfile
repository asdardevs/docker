# Specify a base image

FROM node:alpine

#install some depenendencies
WORKDIR /home

COPY package.json .

RUN npm install

COPY . .

# Default Command

CMD ["npm", "start"]

# docker build . => config =>images
# docker build -t simpleweb .  => container
# docker run simpleweb
# docker run -p 8888:8080 simpleweb => 8888 local network 8080 expose port
# docker run -it simpleweb sh => cli container
# docker exec -it 9e5e7a58a732 => go to workdir
# launch in background => docker-compose up -d
# docker composer down
# docker-compose up --build => container maintenance with compose
# Continuous Integration, Continuous Delivery
