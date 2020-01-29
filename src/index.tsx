import * as React from "react";
import * as ReactDOM from "react-dom";
import { registerServiceWorker } from "./utils/registerServiceWorker";
import Placeholder from "./components/Placeholder";

registerServiceWorker();

ReactDOM.render(
  <Placeholder/>,
  document.getElementById("react-container")
);