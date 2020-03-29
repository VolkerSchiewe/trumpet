import { h, render } from 'preact';

import {registerServiceWorker} from "./utils/registerServiceWorker";
import App from "./components/App";
import * as Sentry from "@sentry/browser"

Sentry.init({dsn: "https://c8dd35ce4f6b477aa520e6ea7ebc4574@sentry.io/3651952"});

if (process.env.NODE_ENV == "production")
  registerServiceWorker();


render(
  <App/>,
  document.getElementById("react-container") as HTMLElement
);