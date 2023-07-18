//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./views/home";
import Layout from "./Layout";
//import your own components

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
