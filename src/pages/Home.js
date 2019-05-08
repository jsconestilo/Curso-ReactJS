import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";

import platziConfLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
/**
 * Componente de página para el Home de la Aplicación
 *
 * para mostrarla como página de iniciio, es importante declarar un Route
 * con path a / y como componente a renderizar esta misma página
 *
 */
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col Home__col col-12 col-md-4">
              <img
                src={platziConfLogo}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />
              <h1>Badge Management System</h1>
              <Link to="/badges" className="btn btn-primary">
                Start
              </Link>
            </div>
            <div className="col Home__col d-none d-md-block col-md-8">
              <img
                src={astronauts}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
