import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

// import "./dom/app";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
