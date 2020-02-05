import * as React from "react";
import * as ReactDOM from "react-dom";
import {registerServiceWorker} from "./utils/registerServiceWorker";
import App from "./components/App";
import i18n from "./i18n/i18n";

if (process.env.NODE_ENV == "production")
  registerServiceWorker();

i18n()

ReactDOM.render(
  <App/>,
  document.getElementById("react-container")
);