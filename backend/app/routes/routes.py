from flask import request, jsonify
from flask_restx import Namespace, Resource, fields
from app.models.models import VivianiParameters
from app.services.calculate_service import calcular_perimetro

calculate_namespace = Namespace(
    "calculate", description="Ruta para calcular el perimetro de una ventana de Viviani"
)

calculate_model = calculate_namespace.model(
    "Parametros",
    {
        "radio": fields.Float(description="Radio del la Esfera a Evaluar"),
        "subintervalos": fields.Integer(
            description="Subintervalos para la suma de Riemmann"
        ),
    },
)

response_model = calculate_namespace.model(
    "Respuesta",
    {
        "result": fields.Float(
            description="Aproximacion del perimetro de la Ventana de Viviani"
        )
    },
)


@calculate_namespace.route("")
class CalcularPerimetro(Resource):
    @calculate_namespace.doc(response={200, "success"}, model=response_model)
    @calculate_namespace.expect(calculate_model)
    def post(self):
        data = request.json
        radio = float(data.get("radio", 0))
        subintervalos = int(data.get("subintervalos", 0))
        parameters = VivianiParameters(radio, subintervalos)
        result = calcular_perimetro(parameters)
        return jsonify(result=result)
