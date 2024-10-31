// Prediction component
import "./Prediction.css";
const Prediction = ({ model, prediction, onStartNew }) => {
  return (
    <div className="prediction-container">
      <h3>Prediction Results</h3>
      <div>
        <p>Selected Model: {model}</p>
        <p>Prediction : {prediction}</p>
        <button id="new-predict" onClick={onStartNew}>
          Start New Prediction
        </button>{" "}
      </div>{" "}
    </div>
  );
};
export default Prediction;
