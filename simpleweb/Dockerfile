# Specify a base image

FROM node:alpine

#install some depenendencies
COPY ./ ./home
WORKDIR /home

RUN npm install

# Default Command

CMD ["npm", "start"]

# docker build . => config
# docker build -t simpleweb .  => images
# docker run simpleweb
# docker run -p 8888:8080 simpleweb => 8888 local network 8080 expose port
# docker run -it simpleweb sh => cli container
# docker exec -it 9e5e7a58a732 => go to workdir
