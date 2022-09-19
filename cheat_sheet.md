## How to install a virtual environment
    python3 -m venv venv
    source venv/bin/activate

## Rodar o container do projeto

    docker run --rm --name pg-docker -e POSTGRES_PASSWORD=tron -d -p 5432:5432 -v Users/enriccogemha/docker/volumes/postgres:/var/lib/postgresql/data postgres

## Mudança de banco de dados (atualizar no Django)

    python3 manage.py migrate 
    python3 manage.py createsuperuser