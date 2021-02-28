import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <div className="white-space"></div> */}
      <div className="body-container">
        <Navbar />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
