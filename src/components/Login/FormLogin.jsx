import React, { useState } from "react";
import Logo from "../../assets/LogoFuerteMex.png";
import "./FormLogin.css";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", { email, password });
  };

  return (
    <div className="login-container">
      <div className="shape-top-left"></div>
      <div className="shape-bottom"></div>

      <div className="main-content">
        <div className="logo-container">
          <img src={Logo} alt="Logo FuerteMex" className="logo-image" />
        </div>

        <div className="form-container">
          <h2 className="form-title">Inicio De Sesion</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Juan Carlos"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-input"
                placeholder="***********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              INGRESAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
