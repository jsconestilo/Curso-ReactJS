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

import Badge from "./components/Badge";

const container = document.getElementById("root");

/**
 * EXPLICACIÓN 1:
 *
 * Los props que es la forma corta de properties,
 * son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.
 * Permiten enviar información a nuestros componentes para que se comporten de manera diferente (muestren info diferente)
 */
ReactDom.render(
  <Badge
    firstName="Alexito"
    lastName="González"
    jobTitle="Front End Web Engineer"
    twitter="jsconestilo"
    avatarUrl="https://www.gravatar.com/avatar/0fcf77b7bc594393ac42cebfe45e7179"
  />,
  container
);
