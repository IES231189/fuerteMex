import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Registro from "./Pages/Registro";
import ManejoUsers from "./Pages/ManejoUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Registro /> */}
      <ManejoUsers />

      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </Router>
  );
}

export default App;
