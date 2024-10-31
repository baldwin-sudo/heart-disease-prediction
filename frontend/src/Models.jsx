import React from "react";

function Models() {
  // Define the models and their accuracies
  const models = [
    { name: "KNN", accuracy: 85.5 },
    { name: "Logistic Regression (LR)", accuracy: 90.2 },
    { name: "Naive Bayes", accuracy: 88.1 },
    { name: "MLP", accuracy: 92.0 },
    { name: "SVM", accuracy: 89.5 },
  ];

  return (
    <div>
      <h2>Model Accuracy Comparison</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Model</th>
            <th style={headerStyle}>Accuracy (%)</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr key={index}>
              <td style={cellStyle}>{model.name}</td>
              <td style={cellStyle}>{model.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Inline styles for the table
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "20px 0",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
  padding: "12px",
  textAlign: "left",
  backgroundColor: "rgb(107, 62, 62)",
  color: "white",
};

const cellStyle = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};
export default Models;
