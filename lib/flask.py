from flask import Flask
from lib import config
from lib import pages

app = Flask(__name__)
    
def create_app():
        app = Flask(__name__)
        app.register_blueprint(pages.bp)
        return app

def StartServer():
    create_app().run(host=config.configs.get("ip").data, port=config.configs.get("port").data, debug=config.configs.get("debug").data)