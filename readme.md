https://razzlejs.org/getting-started

#Заготовка для php проектов в докере    

## docker env 
https://docs.docker.com/compose/env-file/   


### запуск стоп
docker-compose up --build
docker-compose down

### для php 7.2 
добавить
RUN pecl install mcrypt
RUN docker-php-ext-enable mcrypt

    // app('debugbar')->warning($request);
composer require barryvdh/laravel-debugbar --dev
    "barryvdh/laravel-debugbar": "^3.2",
        "barryvdh/laravel-ide-helper": "^2.6",
        
        public/app/package-lock.json ????


        для тунелирования
        https://localtunnel.github.io/www/
    include /etc/nginx/conf.d/*.conf;
        include /etc/nginx/sites-enabled/*;
