import json

def extract_route(request):
    return request.split()[1][1:]

def read_file(filepath):
    with open(filepath, 'rb') as file:
        return file.read()

def load_data(filename):
    filepath = f'data/{filename}'
    with open (filepath, 'r') as file:
        return json.loads(file.read())

def load_template(filename):
    filepath = f'templates/{filename}'
    with open (filepath, 'r') as file:
        return file.read()

def write_json(filename, content):
    data = load_data(filename)
    data.append(content)
    with open (f'data/{filename}', 'w') as file:
        json.dump(data, file)