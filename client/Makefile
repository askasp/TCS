
build:
	docker build -t tcsclient .

run:
	docker run -it \
		-v ${PWD}:/usr/src/app \
		-v /usr/src/app/node_modules \
		-p 3000:3000 \
		--rm \
		tcsclient
