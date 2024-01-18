import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import ListEmployee from "./component/ListEmployee";
import Contactus from "./component/Contactus";
//import Example from "./Example";
import Nopage from "./component/Nopage";
import Createemp from "./component/Create";
import Employee from "./component/Employee";
import Employeeup from "./component/Employeeup";
import { Employeedel } from "./component/Employeedel";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="Listemployee" element={<ListEmployee />} />
        <Route path="Create" element={<Createemp />} />
        <Route path="emp/:id" element={<Employee />} />
        <Route path="empup/:id" element={<Employeeup />} />
        <Route path="empdel/:id" element={<Employeedel />} />
        {/* <Route path="Example" element={<Example />} /> */}
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
