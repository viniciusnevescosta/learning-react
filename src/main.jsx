import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const ROOT_ID = document.getElementById("root");

ROOT_ID
  ? ReactDOM.createRoot(ROOT_ID).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  : console.log("The root element was not find.");
