import React from "react";
import { GoAlert } from "react-icons/go";
import Header from "../ui/Header/Header";
import BarraMenu from "../ui/BarraMenu/BarraMenu";
import "./ComponentsMovimientos.css";

export default function ComponentsMovimientos() {
  return (
    <>
      <main>
        <Header />
        <div className="content-main">
          <BarraMenu />
          <div className="content-padre-cajas">
            <h1>Movimientos cerca de la Caja</h1>
            <div>
              <div className="Content-datos-caja">
                <GoAlert className="icon-alert" size={40} />
                <h3 className="text-usuarios-asignados">
                  Estado <br /> Detectado
                </h3>
                <h3 className="text-usuarios-asignados">
                  Distancia <br /> 5cm
                </h3>
                <h3 className="text-usuarios-asignados">
                  Nivel de Proximidad <br /> Objetivo Cercano
                </h3>
                <h3 className="text-usuarios-asignados">Fecha Actividad</h3>
              </div>
              <div className="Content-datos-caja">
                <GoAlert className="icon-alert" size={40} />
                <h3 className="text-usuarios-asignados">
                  Estado <br /> Detectado
                </h3>
                <h3 className="text-usuarios-asignados">
                  Distancia <br /> 5cm
                </h3>
                <h3 className="text-usuarios-asignados">
                  Nivel de Proximidad <br /> Objetivo Cercano
                </h3>
                <h3 className="text-usuarios-asignados">Fecha Actividad</h3>
              </div>
              <div className="Content-datos-caja">
                <GoAlert className="icon-alert" size={40} />
                <h3 className="text-usuarios-asignados">
                  Estado <br /> Detectado
                </h3>
                <h3 className="text-usuarios-asignados">
                  Distancia <br /> 5cm
                </h3>
                <h3 className="text-usuarios-asignados">
                  Nivel de Proximidad <br /> Objetivo Cercano
                </h3>
                <h3 className="text-usuarios-asignados">Fecha Actividad</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
