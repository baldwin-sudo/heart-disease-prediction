import { useState } from "react";
import Form from "./Form";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Abstract from "./Abstract";
import Models from "./Models";
function App() {
  return (
    <div className="main-container">
      <Router>
        <nav className="navigation">
          <Link className="link" to="/">
            Abstract
          </Link>
          <Link className="link" to="/predict">
            Predict
          </Link>
          <Link className="link" to="/models">
            Display models Accuracy
          </Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/predict" element={<Form />} />
            <Route path="/" element={<Abstract />} />

            <Route path="/models" element={<Models />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
