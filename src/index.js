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
// Requerir el componente
import Badge from "./components/Badge";

const container = document.getElementById("root");

/**
 * EXPLICACIÓN 2:
 *
 * Componetes VS elementos
 *
 * El primer parametro a pasar a ReactDOM.render( ) es el elemento a rederizar, Sin embargo yo quiero un componente, para ello, debemos crear una instancia de ese componente que daría como resultado el elemento.
 * Por ello empleo las llaves angulares < > con el nombre del componente importado */
ReactDom.render(<Badge />, container);
