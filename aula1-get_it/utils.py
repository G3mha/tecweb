def extract_route(request):
    return (request.splitlines()[0].split(' ')[1]).replace('/', '', 1)

def read_file(filepath):
    with open(filepath, 'rb') as file:
        return file.read()