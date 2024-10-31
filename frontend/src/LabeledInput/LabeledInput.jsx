// LabeledInput.js
import React from "react";
import "./labeledInput.css";
function LabeledInput({ id, label, value, onChange, unit, info }) {
  return (
    <div className="labeledInput-container">
      <label className="label-text" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="input"
        type="number"
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
      />
      <p className="unit">{unit}</p>
      <p className="info">{info}</p>
    </div>
  );
}

export default LabeledInput;
