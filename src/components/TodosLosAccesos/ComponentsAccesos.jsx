import React from "react";
import { Link } from "react-router-dom";
import { GoCheckCircle } from "react-icons/go";
import Header from "../ui/Header/Header";
import BarraMenu from "../ui/BarraMenu/BarraMenu";

export default function ComponentsAccesos() {
  return (
    <>
      <main>
        <Header />
        <div className="content-main">
          <BarraMenu />
          <div className="content-padre-cajas">
            <h1>Todos los Accesos</h1>
            <div>
              <div className="Content-datos-caja">
                <GoCheckCircle className="icon-alert" size={40} />
                <h3 className="text-usuarios-asignados">
                  Pin <br /> 123ds
                </h3>
                <h3 className="text-usuarios-asignados">
                  Estado <br /> Correcto
                </h3>
                <h3 className="text-usuarios-asignados">
                  Usuario <br /> Username
                </h3>
                <h3 className="text-usuarios-asignados">
                  Fecha <br /> 12/03/2025
                </h3>
              </div>
              <div className="Content-datos-caja">
                <GoCheckCircle className="icon-alert" size={40} />
                <h3 className="text-usuarios-asignados">
                  Pin <br /> 123ds
                </h3>
                <h3 className="text-usuarios-asignados">
                  Estado <br /> Correcto
                </h3>
                <h3 className="text-usuarios-asignados">
                  Usuario <br /> Username
                </h3>
                <h3 className="text-usuarios-asignados">
                  Fecha <br /> 12/03/2025
                </h3>
              </div>
              <div className="Content-datos-caja">
                <GoCheckCircle className="icon-alert" size={40} />
                <h3 className="text-usuarios-asignados">
                  Pin <br /> 123ds
                </h3>
                <h3 className="text-usuarios-asignados">
                  Estado <br /> Correcto
                </h3>
                <h3 className="text-usuarios-asignados">
                  Usuario <br /> Username
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
