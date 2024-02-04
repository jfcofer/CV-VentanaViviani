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
    <div className="col-5">
      <div className="form-floating mb-5 row">
        <input
          type="number"
          value={radio || ""}
          className="form-control"
          onChange={(e) => setRadio(parseFloat(e.target.value))}
        />
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Radio de la Esfera
          </span>
        </div>

        <label>Radio de la Esfera:</label>
      </div>
      <div className="form-floating mb-5 row">
        <input
          type="number"
          className="form-control"
          value={subintervalos || ""}
          onChange={(e) => setSubintervalos(parseFloat(e.target.value))}
        />
        <label>SubIntervalos</label>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            SubIntervalos de la Suma de Riemmann
          </span>
        </div>
      </div>
      <button onClick={handleCalculate}>Calculate</button>

      {result !== undefined && (
        <div>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default NumberCalculator;
