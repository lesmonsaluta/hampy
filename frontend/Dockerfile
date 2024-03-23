FROM node:lts

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

# Install common utilities and Git
RUN apt-get update && apt-get install -y \
    git \
    bash \
    zsh \
    curl \ 
    && rm -rf /var/lib/apt/lists/*
    
RUN npm install

COPY . .

EXPOSE 3000

RUN 