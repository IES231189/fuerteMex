import React from "react";
import { Link } from "react-router-dom";
import "./BarraMenu.css";

export default function BarraMenu() {
  return (
    <>
      <div className="content-main">
        <aside className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/AccesoEnTiempoReal">Acceso En Tiempo Real</Link>
            </li>
            <li>
              <Link to="/CajasYusuarios">Cajas y Usuarios Autorizados</Link>
            </li>
            <li>
              <Link to="/Usuarios">Usuarios</Link>
            </li>
            <li>
              <Link to="/AlertasProximidad">Alertas de Proximidad</Link>
            </li>
            <li>
              <Link to="/AlertasIntrusion">Alertas De Intrusion</Link>
            </li>
            <li>
              <Link to="/ActividadEnCaja">Actividad En La Caja</Link>
            </li>
            <li>
              <Link to="/HistorialDeAccesos">Historial De Accesos</Link>
            </li>
            <li>
              <Link to="/eventosDeAperturaYcierrre">
                Eventos De Apertura y Cierre
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
