@ECHO OFF
FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i
docker build -t dockerchat .
docker run -p 8080:8080 -d dockerchat