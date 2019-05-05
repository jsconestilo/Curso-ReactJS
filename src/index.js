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

/**
 * Esto es JSX, es un lenguaje para representar HTML directamente desde Javascript
 * Es poderoso ya que podemos interpolar contenido de variables y sentencias
 * Es una nueva caracteristica de JS, por tanto se requiere de Babel (incluido).
 * Para ello se emplea el módulo "react" (Es un anallogo a createElement de JS nativo)
 *
 * Siempre que escribas JSX es requisito importar React.
 */
const element = <h1>Hola Mundo desde ReactJS</h1>;

// En este punto localizo el contenedor padre donde montaré mi App de Reactjs
const container = document.getElementById("root");

/**
 * Para mostrar el elemento en pantalla, es necesario renderizarlo.
 * Es lo que hace react-dom (es un analogo a appendChild() nativo de JS)
 * sus parametros son: (__queElemento__, __donde__)
 */
ReactDom.render(element, container);
