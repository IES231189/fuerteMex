import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Registro from "./Pages/Registro";
import ManejoUsers from "./Pages/ManejoUsers";
import Movimientos from "./Pages/Movimientos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Registro /> */}
      {/* <ManejoUsers /> */}
      <Movimientos />

      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </Router>
  );
}

export default App;
