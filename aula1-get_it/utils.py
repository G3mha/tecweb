def extract_route(request):
    return (request.splitlines()[0].split(' ')[1]).replace('/', '', 1)

def read_file(filepath):
    with open(filepath, 'rb') as file:
        return file.read()

def load_data(filepath):
    return read_file(filepath), extract_route(filepath)