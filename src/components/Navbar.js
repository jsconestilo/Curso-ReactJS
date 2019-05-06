import React from "react";
// Requiere de sus propios estilos y necesita una imagen para su diseño. Por tanto se importan
import "./styles/Navbar.css";
import logo from "../images/logo.svg";
/**
 * Este componente va a ser necesitado por un componente de página
 * para mostrar la barra de navegación
 */
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conferencias</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
