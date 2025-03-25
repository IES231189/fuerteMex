import React from "react";
import Logo from "../../assets/LogoFuerteMex.png";
import IconoPerfil from "../../assets/IconoPerfil.png";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GoCheckCircle } from "react-icons/go";

export default function ComponentsAccesos() {
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
