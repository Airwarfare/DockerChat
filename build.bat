@ECHO OFF
FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i
docker run --net=host -p 0.0.0.0:6379:6379 -d redis
::timeout 3
docker build -t dockerchat .
docker run --net=host -p 8080:8080 -d dockerchat 

