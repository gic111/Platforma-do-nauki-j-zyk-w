FROM node:18

WORKDIR /app

# Install dependencies in separate layers for better caching
COPY package*.json ./

# Explicitly install all dev dependencies first
# Install dependencies
COPY package*.json ./
RUN npm install && \
    npm install @vue/cli-service --save-dev

# Verify installations
RUN npx eslint --version && \
    npm list eslint-plugin-vue && \
    npm list @vue/cli-plugin-eslint

COPY . .

RUN npm run build

CMD ["npm", "run", "serve"]