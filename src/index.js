import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// setTimeout(() => render(<App />, document.querySelector("#root")), 1000);
render(<App />, document.querySelector("#root"));

serviceWorker.unregister();
