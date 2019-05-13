import React from "react";
import ReactDom from "react-dom";

import "./styles/Modal.css";

function Modal(props) {
  // Si el estado compartido indica que el modal debe permanecer cerrado entonces retornamos null (nada)
  if (!props.isOpen) {
    return null;
  }
  /**
   * En caso contrario, creamos un PORTAL para indicar que contenido debe renderizarse y en que lugar.
   * Para nuestro caso, esta info se deme mostrar en el id modal que se encentra declarado en el index.html
   * fuera del contexto de la app. (Puede haber problemas de estilos y mejor es sacarlo)
   *
   * Este es un componente generico, que a travpes de usus hijos puede componerse o decorarse
   */
  return ReactDom.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
