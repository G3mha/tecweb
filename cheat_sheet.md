## Install a virtual environment
    python3 -m venv venv
    source venv/bin/activate
    pip freeze > requirements.txt
    pip install -r requirements.txt

## Connect a container on Docker
    docker run --rm --name pg-docker -e POSTGRES_PASSWORD=tron -d -p 5432:5432 -v Users/enriccogemha/docker/volumes/postgres:/var/lib/postgresql/data postgres

## Enter in the container's terminal
    docker exec -it pg-docker bash

## Turn-off a container
    docker kill pg-docker

## Change database on Django
    python3 manage.py migrate
    python3 manage.py createsuperuser

## Create app on Heroku
    heroku create `nome-da-aplicacao`
    heroku git:remote -a `nome-da-aplicacao`

## Deploying on Heroku
    git push heroku main

