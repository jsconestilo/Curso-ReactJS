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

import BadgeNew from "./pages/BadgeNew";
/**
 * En esta ocasión, la aplicación mostrará como página principal la que contiene el componente de listado de badges
 */
import Badges from "./pages/Badges";

const container = document.getElementById("root");

/**
 * EXPLICACIÓN 1:
 * En las SPA solo renderizamos el componente principal. y sobre el se colocaran los componentes secundarios
 * u otras páginas de componentes mediante el sistema de ruteo
 *
 */
ReactDom.render(<Badges />, container);
