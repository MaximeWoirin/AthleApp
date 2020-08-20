make init:
	./config.sh
	npm i

build:
	npm run build
	docker-compose -f docker-compose.dev.yml pull --ignore-pull-failures
	docker-compose -f docker-compose.dev.yml build

up:
	docker-compose -f docker-compose.dev.yml up -d --remove-orphans

down: 
	docker-compose -f docker-compose.dev.yml down

logs:
	docker-compose -f docker-compose.dev.yml logs -f backend

prod:
	docker-compose -f docker-compose.prod.yml pull --ignore-pull-failures
	docker-compose -f docker-compose.prod.yml build
	docker-compose -f docker-compose.prod.yml up -d --remove-orphans

lint:
	npm run lint

test:
	npm run test

compile: 
	npm run build

format:
	npm run format