import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Registro from "./Pages/Registro";
import ManejoUsers from "./Pages/ManejoUsers";
import Movimientos from "./Pages/Movimientos";
import AccesosIncorrectos from "./Pages/AccesosIncorrectos";
import TodosLosAccesos from "./Pages/TodosLosAccesos";
import Actividades from "./Pages/Actividades";
import Header from "./components/ui/Header/Header";
import BarraMenu from "./components/ui/BarraMenu/BarraMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Registro /> */}
      {/* <ManejoUsers /> */}
      {/* <Movimientos /> */}
      {/* <AccesosIncorrectos /> */}
      {/* <TodosLosAccesos /> */}
      <Actividades />
      {/* <Header /> */}
      {/* <BarraMenu /> */}

      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </Router>
  );
}

export default App;
