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

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

/**
 * EXPLICACIÓN 1:
 * Las aplicaciones que se trabajan en React son llamadas single page apps.
 * Esto es posible gracias a React Router que es una librería Open Source
 *
 * En esta ocasión importo un componente que contiene declarada toda la lógica del router.
 * Para que nuestra App se convierta en automático en un SPA
 */

import App from "./components/App";

const container = document.getElementById("root");

/**
 * EXPLICACIÓN 2:
 * En las SPA solo renderizamos el componente principal. y sobre el se colocaran los componentes secundarios
 * u otras páginas de componentes mediante el sistema de ruteo
 */
ReactDom.render(<App />, container);
