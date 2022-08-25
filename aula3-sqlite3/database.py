import sqlite3


class Database:
    def __init__(self, name):
        self.name = name
        self.conn = sqlite3.connect(self.name)