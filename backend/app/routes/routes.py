from flask import request
from flask_restx import Namespace, Resource

calculate_namespace = Namespace(
    "calculate", description="Ruta para calcular el perimetro de una ventana de Viviani"
)


@calculate_namespace.route("/")
class CalcularPerimetro(Resource):
    def post(self):
        data = request.json
        parameter1 = float(data.get("parameter1", 0))
        parameter2 = float(data.get("parameter2", 0)) 
        

