from flask import request, jsonify
from flask_restx import Namespace, Resource, fields
from app.models.models import VivianiParameters
from app.services.calculate_service import calcular_perimetro

calculate_namespace = Namespace(
    "calculate", description="Ruta para calcular el perimetro de una ventana de Viviani"
)


calculate_model = calculate_namespace.model(
    "Parametros",{
        "radio": fields.Float(description="Radio del la Esfera a Evaluar"),
        "subintervalos": fields.Float(description="Subintervalos para la suma de Riemmann")
    }
)

@calculate_namespace.route("")
class CalcularPerimetro(Resource):
    @calculate_namespace.expect(calculate_model)
    def post(self):
        data = request.json
        parameters = VivianiParameters(
            parameter1=float(data.get("radio", 0)),
            parameter2=float(data.get("subintervalos", 0)),
        )
        result = calcular_perimetro(parameters)
        return jsonify(result=result)
