#!/bin/sh

set -x

# set a default version for usage of docker API
export V_DOCKER_API="${V_DOCKER_API:-1.41}"
echo "Docker API Version :: ${V_DOCKER_API}"

echo "$@"

cp /etc/nginx/nginx.conf /tmp/nginx.conf
envsubst '$V_DOCKER_API' < /tmp/nginx.conf | tee /etc/nginx/nginx.conf
rm -f /tmp/nginx.conf

/docker-entrypoint.sh "$@"
