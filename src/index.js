import ReactDOM from "react-dom";
import React from 'react';
import Header from './Header';
import DemoRouter from "./DemoRouter";
import 'bootstrap/dist/css/bootstrap.css';
import CrudDemo from "./CrudDemo";

ReactDOM.render(<DemoRouter/> , document.getElementById("root"));
