FROM php:8.2-fpm

RUN apt-get update && \
    apt-get install -y git unzip libzip-dev && \
    docker-php-ext-install pdo pdo_mysql zip

WORKDIR /var/www/html

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts

COPY . .

RUN chown -R www-data:www-data /var/www/html/storage