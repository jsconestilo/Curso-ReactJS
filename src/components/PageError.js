import React from "react";

import "./styles/PageError.css";

/**
 * Este componente de error muestra el error acontecido tras una consulta fallida a una API
 * Dicha info le es compartida al componente a través de su prop error
 */
function PageError(props) {
  return <div className="PageError">{props.error.message}</div>;
}

export default PageError;
