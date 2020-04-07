docker run \
  --name postgres \
  -e POSTGRES_USER=ryanlima \
  -e POSTGRES_PASSWORD=minhasenhasecreta \
  -e POSTGRES_DB=heroes \
  -p 5432:5432 \
  -d \
  postgres

  docker ps 
  //listar container
  docker exec -it postgres /bin/bash
  //interagir com o container 

  docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## -------------- Mongo DB
docker run \
  --name mongodb \
  -p  27010:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=senhadmin \
  -d \
  mongo:4


## ---
docker run \
  --name mongoclient\
  -p 3000:3000 \
  --link mongodb:mongodb \
  -d \
  mongoclient/mongoclient

## -------

docker exec -it mongodb \
  mongo --host localhost -u admin -p senhadmin --authenticationDatabase admin \
  --eval "db.getSiblingDB('herois').createUser({user: 'ryanlima', pwd: 'minhasenhasecreta', roles: [{role:'readWrite', db: 'herois'}]})"

## ----==--==--==--=-=-=-=-=-=-=-=-=-
