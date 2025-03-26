import React from "react";
import Header from "../ui/Header/Header";
import BarraMenu from "../ui/BarraMenu/BarraMenu";
import "./ComponentsManejoUsers.css";

export default function ComponentsManejoUsers() {
  return (
    <>
      <main>
        <Header />
        <div className="content-main">
          <BarraMenu />
          <div className="content-padre">
            <h1>Asigne Un Nombre O Identificador Al Producto</h1>
            <div className="content-inputs">
              <label htmlFor="">Nombre De La Caja</label> <br />
              <input type="text" placeholder="Nombre" /> <br />
              <label htmlFor="">Estado</label> <br />
              <input type="text" placeholder="Activo" /> <br />
              <label htmlFor="">Ultima Actividad</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <h3 className="titulo-acceso">Usuarios Con Acceso</h3>
              <div className="usuarios-asignados">
                <h3 className="text-usuarios-asignados">Carlos Molina</h3>
              </div>
              <div className="usuarios-asignados">
                <h3 className="text-usuarios-asignados">Carlos Molina</h3>
              </div>
            </div>
            <button className="buton-agregar">Agregar</button>
          </div>
        </div>
      </main>
    </>
  );
}
