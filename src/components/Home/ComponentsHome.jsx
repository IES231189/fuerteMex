import React from "react";
import "./ComponentsHome.css";
import Logo from "../../assets/LogoFuerteMex.png";

export default function ComponentsHome() {
  return (
    <>
      <main>
        <header className="header-container">
          <img src={Logo} alt="Logo de la empresa" className="logo" />
          <h1 className="header-titulo">FuerteMex</h1>
        </header>
        <div className="content-titulos">
          <h1 className="titulo-padre">Bienvenido, administrador </h1>
          <p className="parrafo">
            Con este producto podra gestionar multiples cuentas , tener acceso a
            informacion en tiempo real del producto acerca de intrusion ,
            accesos correctos o hardware{" "}
          </p>
        </div>

        <div className="container-content">
          <div className="container-butons">
            <button className="buton-home">USUARIOS</button>
            <button className="buton-home">ALERTAS</button>
            <button className="buton-home">HISTORIAL DE ACCESOS</button>
          </div>
          <div className="container-logo-content">
            <img src={Logo} alt="Logo de la empresa" className="logo-content" />
          </div>
        </div>
        <button className="boton-inicio">Inicio</button>
      </main>
    </>
  );
}
