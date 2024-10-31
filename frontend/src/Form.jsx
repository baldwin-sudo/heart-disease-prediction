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
  const [selectedModel, setSelectedModel] = useState(""); // State for selected model
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value); // Update the selected model
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
      <div className="buttons">
        <div className="model-selection">
          <select id="model" value={selectedModel} onChange={handleModelChange}>
            <option value="model1">Knn</option>
            <option value="model2">logistic Regression</option>
            <option value="model3">svm</option>
            <option value="model4">neural network</option>
            <option value="model5">naive bayes</option>
            {/* Add more models as needed */}
          </select>
        </div>
        <button id="predict-btn" type="submit">
          Predict
        </button>
      </div>
    </form>
  );
}

export default Form;
