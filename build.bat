@ECHO OFF
FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i
docker start redis
docker build -t dockerchat .
docker rm dockerchat1
docker rm dockerchat2
docker run -d --name=dockerchat1 --net=dockerchat -p 8080:8080 -e "REDIS_ENDPOINT=redis"  dockerchat
docker run -d --name=dockerchat2 --net=dockerchat -p 8081:8080 -e "REDIS_ENDPOINT=redis" -e "PORT=8080"  dockerchat

