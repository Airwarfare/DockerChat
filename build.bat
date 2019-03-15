@ECHO OFF
FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i
docker run --net=dockerchat -p 0.0.0.0:6379:6379 -d redis
docker build -t dockerchat .
docker run -d --net=dockerchat -p 8080:8080 -e "REDIS_ENDPOINT=redis"  dockerchat
docker run -d --net=dockerchat -p 8081:8080 -e "REDIS_ENDPOINT=redis" -e "PORT=8080"  dockerchat

