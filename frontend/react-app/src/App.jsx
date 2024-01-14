// frontend/src/App.jsx
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    radio: '',
    subintervalos: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and handle form submission
    console.log("Submitted data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Radio:
          <input
            type="text"
            name="radio"
            value={formData.radio}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Subintervalos:
          <input
            type="text"
            name="subintervalos"
            value={formData.subintervalos}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;