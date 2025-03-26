import React from "react";
import Logo from "../../../assets/LogoFuerteMex.png";
import IconoPerfil from "../../../assets/IconoPerfil.png";
import { CgMail } from "react-icons/cg";
import "./Header.css";

export default function Header() {
  return (
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
  );
}
