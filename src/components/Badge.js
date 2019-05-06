import React from "react";
// Importar estilos CSS propios para este componente. Webpack sabe como insertar todo este CSS en el componente
import "./styles/Badge.css";
// Importar una imagen para utilizarla dentro de mi componente.
import confLogo from "../images/badge-header.svg";

/**
 * EXPLICACION 1:
 *
 * Para los estilos de nuestros componentes, crearemos una carpeta llamada Styles y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.
 * Para usar los estilos es necesario importarlos con import
 * React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino className
 * Es posible utilizar Bootstrap con React, sólo debe ser instalado con npm install bootstrap y debe ser importado en el index.js
 * Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js
 */
class Badge extends React.Component {
  // Los nombres de atributos HTML que entren en conficto con palabras resercadas de JS, deben nombrarse según la documentacion de React
  // class -----  className
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar/0fcf77b7bc594393ac42cebfe45e7179"
            alt="Avatar"
          />
          <h1>
            Alejandro <br /> González
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@jsconestilo</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

// Exportar el componente para poder requerirlo en donde se le necesite
export default Badge;
