## Start API-ts
npm run compile

npm start

## Docker command
docker pull redis

docker run --name redis13 -p 6379:6379 -d redis redis-server --appendonly no

docker exec -it redis13 redis-cli

Run ps -a docker (to get the container id)

Up the container: docker start (container id)

Run: docker exec -it (container id) / bin / sh

Run redis-cli from inside the container

Run get (key name in redis)
