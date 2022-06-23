## Commands

```bash

# list docker containers
curl --unix-socket /var/run/docker.sock --url "http://localhost/v1.41/containers/json"

# with nginx proxy
docker image pull nginx:1.22

docker container run --rm -d \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume $PWD/nginx/nginx.conf:/etc/nginx/nginx.conf \
  --volume $PWD/nginx/index.html:/usr/share/nginx/html/index.html \
  --name nginx \
  --hostname nginx \
  --publish 8080:8080 \
  nginx:1.22

docker container logs -f --tail 50 nginx

# call the API
curl -X GET --url "http://localhost:8080/v1.41/containers/json"

docker ps -a

curl --silent -X GET --url "http://localhost:8080/v1.41/containers/nginx/logs?stdout=1" --output nginx.log
cat nginx.log

curl --silent -X DELETE --url "http://localhost:8080/v1.41/containers/nginx?force=1"

docker ps -a


curl --silent -X POST --url "http://localhost:8080/v1.41/containers/nginx/pause"
curl --silent -X POST --url "http://localhost:8080/v1.41/containers/nginx/unpause"

docker container pause nginx
docker container unpause nginx

# clean up
docker container rm -f nginx

```
