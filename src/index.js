/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/

// Librerías necesarias para aplicaciones React
import React from "react";
import ReactDom from "react-dom";

// const element = <h1>Hola Mundo desde ReactJS</h1>;

/**
 * EXPLICACION 1:
 * JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript. (jsx solo es azucar sintetico)
 * JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.
 *
 * (__elemento__, __atributos__, __hijo1__, [__hijo2__, __hijoN__])
 */

//const element = React.createElement("h1", {}, "Hola, soy los children");

/*
const element = React.createElement(
  "a",
  { href: "http://platzi.com" },
  "Ir a Platzi"
);
*/

const nombre = "Alejandro González";
const suma = function() {
  return 3 + 3;
};

/**
 * EXPLICACION 2:
 * React.createElement() y JSX pueden mostrar información de variables e instrucciiones de Javascript
 * con createElement es necesario literal template ${variable}
 * con JSX solo es necesario declarar { }
 * Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.
 */

//const element = React.createElement("h1", {}, `Hola, soy ${nombre}`);

/*const element = (
  <h1>
    Hola soy {nombre} y tengo {2019 - 1985} años y la función tiene {suma()}.
    variables con contenido null, undefined, false, no se mostrarán {null}
  </h1>
);*/

/**
 * EXPLICACION 3:
 * El siguiente ejemplo demuestra porque se prefiere emplear JSX en lugar de React.createElement
 * JSX es un lenguaje más expresivo y simple de utilizar
 */

const jsx = (
  <div>
    <h1>Hola soy {nombre}</h1>
    <p>Soy ingeniero en FrontEnd</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, `Hola, soy ${nombre}`),
  React.createElement("p", {}, "Soy licenciado en informática")
);

// En este punto localizo el contenedor padre donde montaré mi App de Reactjs
const container = document.getElementById("root");

/**
 * Para mostrar el elemento en pantalla, es necesario renderizarlo.
 * Es lo que hace react-dom (es un analogo a appendChild() nativo de JS)
 * sus parametros son: (__queElemento__, __donde__)
 */
ReactDom.render(element, container);
