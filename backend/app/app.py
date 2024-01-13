from flask import Flask, request, jsonify
from flask_restx import Api
from routes.routes import calculate_namespace

api = Api()
app = Flask(__name__)

api.init_app(app)

api.add_namespace(calculate_namespace)



if __name__ == '__main__':
    app.run(debug=True)
