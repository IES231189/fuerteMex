import React from "react";
import "./componentsRegistro.css";
import { CgUserAdd } from "react-icons/cg";
import Header from "../ui/Header/Header";
import BarraMenu from "../ui/BarraMenu/BarraMenu";

export default function componentsRegistro() {
  return (
    <>
      <main>
        <Header />
        <div className="content-main">
          <BarraMenu />
          <div>
            <div>
              <h1 className="titulo-padre">
                Registros de Acceso en Tiempo Real
              </h1>
              <div className="content-datos">
                <CgUserAdd size={30} />
                <h3>Caja 1</h3>
                <h3>Codigo Ingresado</h3>
                <h3>Estado</h3>
                <h3>Fecha De Ingreso</h3>
              </div>
              <div className="content-datos">
                <CgUserAdd size={30} />
                <h3>Caja 1</h3>
                <h3>Codigo Ingresado</h3>
                <h3>Estado</h3>
                <h3>Fecha De Ingreso</h3>
              </div>
              <div className="content-datos">
                <CgUserAdd size={30} />
                <h3>Caja 1</h3>
                <h3>Codigo Ingresado</h3>
                <h3>Estado</h3>
                <h3>Fecha De Ingreso</h3>
              </div>
              <div className="content-datos">
                <CgUserAdd size={30} />
                <h3>Caja 1</h3>
                <h3>Codigo Ingresado</h3>
                <h3>Estado</h3>
                <h3>Fecha De Ingreso</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
