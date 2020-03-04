import * as React from "react";
import * as ReactDOM from "react-dom";
import {registerServiceWorker} from "./utils/registerServiceWorker";
import App from "./components/App";
import i18n from "./i18n/i18n";
import * as Sentry from "@sentry/browser"

Sentry.init({dsn: "https://c8dd35ce4f6b477aa520e6ea7ebc4574@sentry.io/3651952"});

if (process.env.NODE_ENV == "production")
  registerServiceWorker();

i18n();

ReactDOM.render(
  <App/>,
  document.getElementById("react-container")
);