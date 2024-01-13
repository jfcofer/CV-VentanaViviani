from app.models.models import VivianiParameters
from math import cos, sin, pi, sqrt


def calcular_perimetro(params: VivianiParameters) -> float:
    radio, subintervalos = params.radio, params.subintervalos

    a = 0
    b = 2 * pi
    integral = 0
    for i in range(subintervalos):
        integral += f((i + 1) * (b / subintervalos))

    result = integral * radio * (1 / sqrt(2))
    return result


def f(x):
    return sqrt(3 + sin(x))
