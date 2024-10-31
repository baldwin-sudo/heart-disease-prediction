// Form.js
import React, { useState } from "react";
import LabeledInput from "./LabeledInput/LabeledInput";
import { continuous_columns, categorical_columns } from "./features"; // Adjust the import path accordingly
import "./form.css";
function Form() {
  const [formData, setFormData] = useState({});
  const [displayPredict, setDisplayPredict] = useState(false);
  const handleInputChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <form>
      {categorical_columns.map((column, index) => (
        <LabeledInput
          key={index} // Use index as key (or a better unique identifier if available)
          id={column}
          label={column.charAt(0).toUpperCase() + column.slice(1)} // Capitalize first letter
          value={formData[column] || ""}
          onChange={handleInputChange}
          info={"Enter value for " + column}
          unit={"unit: N/A"} // Adjust unit as necessary
        />
      ))}
      {/* Render LabeledInput for continuous columns */}
      {continuous_columns.map((column, index) => (
        <LabeledInput
          key={index} // Use index as key (or a better unique identifier if available)
          id={column}
          label={column.charAt(0).toUpperCase() + column.slice(1)} // Capitalize first letter
          value={formData[column] || ""}
          onChange={handleInputChange}
          info={"Enter value for " + column}
          unit={"unit: N/A"} // Adjust unit as necessary
        />
      ))}
      <button id="predict-btn" type="submit">
        Predict{" "}
      </button>
    </form>
  );
}

export default Form;
