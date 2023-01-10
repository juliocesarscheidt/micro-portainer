#!/bin/sh

set -x

# set a default version for usage of docker API
export V_DOCKER_API=${V_DOCKER_API:-1.41}
echo "Docker API Version :: ${V_DOCKER_API}"

echo "$@"

cat /etc/nginx/nginx.conf | envsubst \${V_DOCKER_API} | tee /etc/nginx/nginx.conf
/docker-entrypoint.sh "$@"
