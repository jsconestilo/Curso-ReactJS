import React from "react";
/**
 * Este es un componente funcional, tambien llamado componente sin estado.
 *
 * Por ello la firma de su cuerpo es una función
 * y retorna los contenidos en JSX
 *
 * La finalidad de este componente de página es fungir como una página de ERROR 404
 * Si no hay match en la lista de Route, se activaría como ultima opcion
 * El Route que invoca este componente
 */
function NotFound() {
  return <h1>Error 404: Página no encontrada</h1>;
}

export default NotFound;
