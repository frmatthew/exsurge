FROM node:argon

# Create app directory
RUN mkdir -p /src

ADD package.json /src
RUN cd /src && npm install

# Bundle app source
ADD . /src

RUN npm run build

# CMD [ "npm", "run build" ]