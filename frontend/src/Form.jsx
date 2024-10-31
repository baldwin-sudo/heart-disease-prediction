import React, { useState } from "react";
import LabeledInput from "./LabeledInput/LabeledInput";
import { continuous_columns, categorical_columns } from "./features"; // Adjust the import path accordingly
import "./form.css";

import Prediction from "./Prediction";

function Form() {
  const [formData, setFormData] = useState({});
  const [displayPredict, setDisplayPredict] = useState(false);
  const [selectedModel, setSelectedModel] = useState(""); // State for selected model

  const handleInputChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value); // Update the selected model
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setDisplayPredict(true); // Set state to show prediction component
  };

  const handleStartNew = () => {
    setDisplayPredict(false); // Reset to show the form
    setFormData({}); // Clear the form data
    setSelectedModel(""); // Reset selected model
  };

  return (
    <>
      {!displayPredict ? (
        <form onSubmit={handleSubmit}>
          {categorical_columns.map((column, index) => (
            <LabeledInput
              key={index}
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
              key={index}
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
              <select
                id="model"
                value={selectedModel}
                onChange={handleModelChange}
              >
                <option value="">Select a model</option>
                <option value="knn">KNN</option>
                <option value="logistic_regression">Logistic Regression</option>
                <option value="svm">SVM</option>
                <option value="neural_network">Neural Network</option>
                <option value="naive_bayes">Naive Bayes</option>
              </select>
            </div>
            <button id="predict-btn" type="submit">
              Predict
            </button>
          </div>
        </form>
      ) : (
        <Prediction
          model={selectedModel}
          prediction={"96 % sick"}
          onStartNew={handleStartNew}
        />
      )}
    </>
  );
}

export default Form;
