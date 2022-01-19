.PHONY: build

setup :
	cd docker && docker-compose build && docker-compose up -d && docker-compose logs -f

destroy :
	cd docker && docker-compose down