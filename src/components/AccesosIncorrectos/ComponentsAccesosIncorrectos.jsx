import React from "react";
import { GoAlert } from "react-icons/go";
import Header from "../ui/Header/Header";
import BarraMenu from "../ui/BarraMenu/BarraMenu";
import "./ComponentsAccesosIncorrectos.css";

export default function ComponentsAccesosIncorrectos() {
  return (
    <>
      <main>
        <Header />
        <div className="content-main">
          <BarraMenu />
          <div className="content-padre-cajas">
            <h1>Accesos incorrectos</h1>
            <div>
              <p className="parrafo-content">Intrusiones confirmadas</p>
              <div className="Content-datos-caja">
                <GoAlert className="icon-alert" size={40} />
                <h3 className="text-usuarios-asignados">
                  Pin <br /> 123ds
                </h3>
                <h3 className="text-usuarios-asignados">
                  Estado <br /> Incorrecto
                </h3>
                <h3 className="text-usuarios-asignados">
                  Fecha <br /> 12/03/2025
                </h3>
              </div>
              <div className="Content-datos-caja">
                <GoAlert className="icon-alert" size={40} />
                <h3 className="text-usuarios-asignados">
                  Pin <br /> 123ds
                </h3>
                <h3 className="text-usuarios-asignados">
                  Estado <br /> Incorrecto
                </h3>
                <h3 className="text-usuarios-asignados">
                  Fecha <br /> 12/03/2025
                </h3>
              </div>
              <div className="Content-datos-caja">
                <GoAlert className="icon-alert" size={40} />
                <h3 className="text-usuarios-asignados">
                  Pin <br /> 123ds
                </h3>
                <h3 className="text-usuarios-asignados">
                  Estado <br /> Incorrecto
                </h3>
                <h3 className="text-usuarios-asignados">
                  Fecha <br /> 12/03/2025
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
