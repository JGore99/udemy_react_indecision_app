import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css'; //npm install normalize.css resets browser styling so all are same
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
