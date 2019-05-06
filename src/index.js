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

// En este caso, la app mostrará como componente de página principal a ...
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("root");

/**
 * EXPLICACIÓN 3:
 * En las SPA solo renderizamos el componente principal. y sobre el se colocaran los componentes secundarios
 * u otras páginas de componentes mediante el sistema de ruteo
 *
 */
ReactDom.render(<BadgeNew />, container);
