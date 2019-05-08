import React from "react";
import Navbar from "./Navbar";

/**
 * Los componentes funcionales sin estado reciben como unico argumento
 * sus props.
 *
 * Si queremos que este componente muestre el contenido de sus hijos
 * (como los SLOTS de VueJS)
 * se accede a los props invocando a sus children
 */
function Layout(props) {
  /**
   * Los componentes están obligados a retornar un elemento padre con sus respectivos hijos. (JSX)
   *
   * Este requerimiento hace que declaremos etiquetas HTML como envoltorios
   * Sin embargo, en la mayoriá de las ocasiones, semanticamente hablando estos envoltorios no cumplen un objetivo especifico
   *
   * Por tanto, React tiene el componente React.Fragment
   * El cual es un envoltorio pero no se renderiza dentro de la página. Cumple el objetivo de <template>
   */
  return (
    <React.Fragment>
      {/** Este Layout conteniene (muestra) el componente de Navbar */}
      <Navbar />
      {/** Y sus correspondientes hijos.
      En este caso sus hijos es el mecanismo de router
      Y ese mecanismo invoca internamente los componentes matcheados al navegar a través de las distintas rutas */}
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
