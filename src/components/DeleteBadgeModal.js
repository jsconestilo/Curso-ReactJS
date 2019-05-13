import React from "react";
/**
 * Este componente hace una composición, (decora) el componente generico Modal
 */
import Modal from "./Modal";

function DeleteBadgeModal(props) {
  // Este componente retorna el componente Modal generico implementando contenido interno (children) especializado
  // El modal se le pasa sus props necesarios para saber si esta abierto y un mecanismo para que notifique que debe cerrarse
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h3>¡Hey usuario!</h3>
        <p>Realmente quieres elmininar el Badge seleccionado</p>
        <div>
          {/** Es en este punto de la especialización que invocamos las notificaciones para eliminar el badge
            o para cerrar el modal */}
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Delete
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
