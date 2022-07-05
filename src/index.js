import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TimersDashboard from "./components/TimersDashboard/TimersDashboard";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TimersDashboard />
  </React.StrictMode>
);

reportWebVitals();
