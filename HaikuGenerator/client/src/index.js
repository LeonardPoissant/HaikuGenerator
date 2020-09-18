import React from "react";
import ReactDOM from "react-dom";

import App from "../src/Components/App";

import HaikuDataBaseProvider from "./HaikuContext/HaikuDataBaseContext";
import HaikuGeneratorProvider from "./HaikuContext/HaikuGeneratorContext";
ReactDOM.render(
  <React.StrictMode>
    <HaikuGeneratorProvider>
      <HaikuDataBaseProvider>
        <App />
      </HaikuDataBaseProvider>
    </HaikuGeneratorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
