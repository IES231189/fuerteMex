import React from "react";
import Logo from "../../assets/LogoFuerteMex.png";
import IconoPerfil from "../../assets/IconoPerfil.png";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./ComponentsManejoUsers.css";

export default function ComponentsManejoUsers() {
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
              <h3>Usuarios Con Acceso</h3>
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
