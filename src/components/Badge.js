import React from "react";

import "./styles/Badge.css";

import confLogo from "../images/badge-header.svg";

/**
 * EXPLICACION 2:
 *
 * Para no tener que estar escribiendo this.props en todos los lugares donde queremos mostrarlos en el componente, se recomienda hacer uso de destructuring
 * 
 * const {
	firstName,
	lastName,
	avatarUrl,
	jobTitle,
	twitter
    } = this.props;
 * y ahora solo {firstName} o {twitter}  
 */
class Badge extends React.Component {
  /**
   * Los props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().
   */
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {/**En esta sección estamos accediendo a la información enviada a través de los props de este componente */}
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

// Exportar el componente para poder requerirlo en donde se le necesite
export default Badge;
