import React, { useState } from "react";
import axios from "axios";

interface CalculatorProps {
  apiUrl: string;
}

const NumberCalculator = ({ apiUrl }: CalculatorProps) => {
  const [radio, setRadio] = useState<number | undefined>(undefined);
  const [subintervalos, setSubintervalos] = useState<number | undefined>(
    undefined
  );
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleCalculate = async () => {
    if (radio !== undefined && subintervalos !== undefined) {
      try {
        const response = await axios.post(`${apiUrl}/calculate`, {
          radio,
          subintervalos,
        });

        setResult(response.data.result);
      } catch (error) {
        console.error("Error calculating result:", error);
      }
    }
  };

  return (
    <div>
      <div className="form-floating mb-5">
        <input
          type="number"
          value={radio || ""}
          className="form-control"
          onChange={(e) => setRadio(parseInt(e.target.value))}
          placeholder="0"
        />
        <label>Radio:</label>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Radio de la Esfera
          </span>
        </div>
      </div>
      <div className="form-floating mb-5">
        <input
          type="number"
          className="form-control"
          value={subintervalos || ""}
          onChange={(e) => setSubintervalos(parseFloat(e.target.value))}
          placeholder="0"
        />
        <label>Sub-Intervalos:</label>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Sub-Intervalos de la Suma de Riemann
          </span>
        </div>
      </div>
      <button
        onClick={handleCalculate}
        className="btn btn-success form-control text-center"
      >
        Calcular
      </button>

      {result !== undefined && (
        <div className="col align-self-end">
          <br />
          <h4>Aproximado del Perímetro</h4>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default NumberCalculator;
