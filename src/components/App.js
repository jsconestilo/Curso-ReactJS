import React from "react";
/**
 * Las aplicaciones que se trabajan en React son llamadas single page apps.
 * Esto es posible gracias a React Router que es una librería Open Source****.
 *
 * Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.
 *
 * React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:
 * BrowserRouter, Route, Switch y Link (Este último en lugar de los elementos de enlace tradicionales)
 */
import { BrowserRouter, Route, Switch } from "react-router-dom";

/**
 * Estos son los componentes de página que se quieren renderizar en la APP, una vez que la URL del navegador
 * coincida con el path de los respectivos Route
 */
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
/**
 * EXPLICACION 3:
 *
 * Este es un componete de React.
 * La diferencia es que este componente no va a contener métodos definidos, y sobre todo, internamente no se va a estar utilizando el estado.
 * Se les conoce como componentes stateless (componentes sin estado)
 */
function App() {
  return (
    // BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
    <BrowserRouter>
      {/** Switch: Dentro de Switch solamente van elementos de Route. Se asegura que solamente un Route se renderize. */}
      <Switch>
        {/** Route: Cuando hay un match con el "path", se hace render del "component". 
        El component declarado va a recibir tres props (de forma automática): match, history, location. */}
        <Route path="/badges" exact component={Badges} />
        <Route path="/badges/new/" exact component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

/**
 * En este sentido, como se quiere que nuestra app funcione cmo un SPA
 * Se exporta este componente, como elemento principal a renderizar por la app
 */
export default App;
