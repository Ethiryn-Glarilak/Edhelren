# app.py

import config
import connexion
import pathlib
import yaml
import road

from flask import render_template

from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

# from models import Person

# import logging

# logging.basicConfig(level=logging.DEBUG)

with open('src/config/swagger.yml', 'r') as f:
    api = yaml.load(f, config.Preload)

basedir = pathlib.Path(__file__).parent.resolve()
app = connexion.App(__name__, specification_dir=basedir, debug = True)

app_flask = app.app
app_flask.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{basedir / 'people.db'}"
app_flask.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app_flask)
ma = Marshmallow(app_flask)
app.add_api(api)

road.load_page(app)

if __name__ == '__main__':
    app.run(debug=True)
