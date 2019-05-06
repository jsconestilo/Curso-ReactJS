import React from "react";
// Importar una imagen para utilizarla dentro de mi componente.
// Esto es parte del trabajo de Webpack. que se configura automáticamente mediante el comando create-react-app
// El cual permite inicializar aplicaciones React
import confLogo from "../images/badge-header.svg";

/**
 * EXPLICACION 1:
 *
 * Los componentes en React son bloques de construcción.
 * Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
 * Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.
 *
 * Identificación de componentes: Para identificarlos debes hacerte las siguientes preguntas:
 *
 * ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
 * ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.
 *
 *  Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React
 *
 * Los componentes de React son clases
 */
class Badge extends React.Component {
  // Todos los componentes requieren obligatoriamente el método render( )
  render() {
    // Este debe retornar la información que se va a rendeerizar dentro del componente
    return (
      <div>
        <div>
          {/** Los atributos con asignación de llaves { } y un valor. En JSX se le conocen como PROPS  */}
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div>
          {/** Para obtener el avatar de una cuenta, es necesario pasar el email
          en md5 a la siguiente URL: https://www.gravatar.com/avatar/ */}
          <img
            src="https://www.gravatar.com/avatar/0fcf77b7bc594393ac42cebfe45e7179"
            alt="Avatar"
          />
          <h1>
            Alejandro <br /> González
          </h1>
        </div>
        <div>
          <p>Frontend Engineer</p>
          <p />
        </div>
        <div>#platziconf</div>
      </div>
    );
  }
}

// Exportar el componente para poder requerirlo en donde se le necesite
export default Badge;
