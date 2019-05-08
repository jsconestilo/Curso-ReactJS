import React from "react";
import { Link } from "react-router-dom";
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
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conferencias</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
