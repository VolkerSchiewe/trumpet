import * as React from "react";
import * as ReactDOM from "react-dom";
import {registerServiceWorker} from "./utils/registerServiceWorker";
import App from "./components/App";

if (process.env.NODE_ENV == "production")
  registerServiceWorker();

ReactDOM.render(
  <App/>,
  document.getElementById("react-container")
);