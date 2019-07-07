import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { registerServiceWorker } from "./utils/registerServiceWorker";

registerServiceWorker();

ReactDOM.render(
  <App/>,
  document.getElementById("react-container")
);