// Podemos usar destructuring de JS para solicitar los metodos que solo vamos a necesitar { }. Con esto me evito tener que escribit React.Component, solo Component
import React, { Component } from "react";
// Este componente de página requiere sus propios estilos de CSS y mostrar una imagen. Por tanto se importan
// Es importante mencionar que si los estilos CSS importan otras imagenes. Estas imagenes han de colocarse en sus lugares respectivos. de lo contrario, webpack no los encontrará y marcará error
import "./styles/BadgeNew.css";
import logo from "../images/badge-header.svg";
// Este componente de página requiere mostrar otros componentes como parte de su contenido interno. POr tanto los importamos
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

/**
 * EXPLICACION 2:
 *
 * Las páginas en React son componentes.
 * Una página puede hacer uso de muchos componentes.
 *
 * Por buenas prácticas se recomienda separar los componentes reutilizables en una carpeta components
 * y los componentes de página en una carpeta pages..
 */
class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/** Al escribir los props no importa el orden en el que lo hagas, únicamente importa el nombre. */}
              <Badge
                firstName="Alejandro"
                lastName="González Reyes"
                twitter="jsconestilo"
                jobTitle="FrontEnd Web Developer"
                avatarUrl="https://www.gravatar.com/avatar/0fcf77b7bc594393ac42cebfe45e7179"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
