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
// Importar librería de Bootstrap para aplicar estilos globales en nuestra app. Para ello es necesario instalarla mediante npm
// Los módulos de npm se acceden solo mencionando el nombre del mismo, sin /, ./ etc
import "bootstrap/dist/css/bootstrap.css";
// Si tenemos estilos CSS globales. Es necesario importarlos desde el index de la App
import "./global.css";
// Requerir el componente
import Badge from "./components/Badge";

const container = document.getElementById("root");

ReactDom.render(<Badge />, container);
