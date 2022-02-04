# node-mongodb-docker-deployment
deploying an app where node is connected with mongodb on docker

### main docker file 
"Dockerfile" will contain all the commands related to custom docker image <br/>
"docker-compose.yml" file will handle the internal connectivity of mongodb and node app <br/>
".dockerignore" file will ignore mentioned files/folder

	- FROM -> tells the base image
	- WORKDIR -> sets the working directory
	- COPY -> copies code from local directory to docker container. command COPY local_directory docker_directory
	- RUN -> install any software
	- CMD -> commands used by docker container

### Access the hosted app :
	
	$ docker-compose up --build
