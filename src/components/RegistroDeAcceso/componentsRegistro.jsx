import React from "react";
import "./componentsRegistro.css";
import Logo from "../../assets/LogoFuerteMex.png";
import IconoPerfil from "../../assets/IconoPerfil.png";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import { CgUserAdd } from "react-icons/cg";

export default function componentsRegistro() {
  return (
    <>
      <main>
        <header className="header-container">
          <img src={Logo} alt="Logo de la empresa" className="logo" />
          <h1 className="header-titulo">FuerteMex</h1>
          <div className="content-perfil">
            <CgMail className="icon-email" size={40} />
            <h2 className="titulo-administrador">Administrador</h2>
            <img
              src={IconoPerfil}
              alt="Logo de la empresa"
              className="icono-perfil"
            />
          </div>
        </header>
        <div className="content-main">
          <nav className="navbar">
            <ul className="nav-links">
              <li>
                <Link to="#">Acceso En Tiempo Real</Link>
              </li>
              <li>
                <Link to="#">Cajas y Usuarios Autorizados</Link>
              </li>
              <li>
                <Link to="#">Usuarios</Link>
              </li>
              <li>
                <Link to="#">Alertas de Proximidad</Link>
              </li>
              <li>
                <Link to="#">Alertas De Intrusion</Link>
              </li>
              <li>
                <Link to="#">Actividad En La Caja</Link>
              </li>
              <li>
                <Link to="#">Historial De Accesos</Link>
              </li>
              <li>
                <Link to="#">Eventos De Apertura y Cierre</Link>
              </li>
            </ul>
          </nav>
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
