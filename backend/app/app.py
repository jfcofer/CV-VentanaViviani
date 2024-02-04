from flask import Flask, request, jsonify
from flask_restx import Api
from app.routes.routes import calculate_namespace
from flask_cors import CORS

api = Api()
app = Flask(__name__)
CORS(app)

api.init_app(app)

api.add_namespace(calculate_namespace)


if __name__ == "__main__":
    app.run(debug=True)
