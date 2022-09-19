## How to install a virtual environment
    python3 -m venv venv
    source venv/bin/activate

## Ligar o container do projeto

    docker run --rm --name pg-docker -e POSTGRES_PASSWORD=tron -d -p 5432:5432 -v Users/enriccogemha/docker/volumes/postgres:/var/lib/postgresql/data postgres

## Entrar no terminal do container
    docker exec -it pg-docker bash

## Desligar o container
    docker kill pg-docker

## Mudança de banco de dados (atualizar no Django)

    python3 manage.py migrate
    python3 manage.py createsuperuser