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
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetails from "../pages/BadgeDetails";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
/**
 * El layout contiene todos los componentes que son iguales en la mayoria de las páginas.
 * En este caso se repite el Navbar, asi como el mecanismo de ruteo
 */
import Layout from "./Layout";
/**
 * Este es un componete de React.
 * La diferencia es que este componente no va a contener métodos definidos, y sobre todo, internamente no se va a estar utilizando el estado.
 * Se les conoce como componentes stateless (componentes sin estado)
 *
 * El componente App es la interfaz general de la aplicación
 * Por tanto incluye el sistema de ruteo, y el layout general de la aplicacion
 */
function App() {
  return (
    // BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
    <BrowserRouter>
      {/** La aplicación contiene elementos que se repiten en todos los componentes de página.
      Por tanto, se invoca el Layout y se le pasa como hijos (SLOTS en VueJS) el sistema de rutas */}
      <Layout>
        {/** Switch: Dentro de Switch solamente van elementos de Route. Se asegura que solamente un Route se renderize. */}
        <Switch>
          {/** Route: Cuando hay un match con el "path", se hace render del "component". 
          El component declarado va a recibir tres props (de forma automática): match, history, location. 
          
          El prop exact, le indica a React Router que la coincidencia debe ser exacta
          
          Home es el componente por defecto a mostrar cuando la app se inicialice a nivel raiz */}
          <Route path="/" exact component={Home} />
          <Route path="/badges" exact component={Badges} />
          <Route path="/badges/new/" exact component={BadgeNew} />
          {/** Esta ruta es para mostrar los detalles del Badge seleccionado */}
          <Route path="/badges/:badgeId" exact component={BadgeDetails} />
          {/** Esta ruta acepta un parametro de consulta identificado como :badgeId
          mismo que puede ser recuperado desde el componente a través del prop
          match.params.badgeId */}
          <Route path="/badges/:badgeId/edit" exact component={BadgeEdit} />
          {/** Se define una ruta de opcion por defecto, si las anteriores no matchearon */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

/**
 * En este sentido, como se quiere que nuestra app funcione cmo un SPA
 * Se exporta este componente, como elemento principal a renderizar por la app
 */
export default App;
