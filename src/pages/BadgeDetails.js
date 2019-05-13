import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
/**
 * Este es un componente mas especializado que hace uso del Modal. es decir
 * el Modal es un componente generico, y este le hace una composición para adaptarlo mejor a la necesidad (decoracion)
 */
import DeleteBadgeModal from "../components/DeleteBadgeModal";

/**
 * Este es un componente funcional (no tiene acceso al estado)
 * cuya tarea es presentar los datos del Container
 *
 * La prop compartida son los datos del badge a presentar
 */
function BadgeDetails(props) {
  // Creamos una variable por comidad y almacenamos la data del badge
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            {/** Mostramos la data dentro del componente de Badge, por tanto se la compartimos */}
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              {/** Declaramos el enlace para editar este badge, y un boton para eliminar */}
              <div>
                <Link
                  to={`/badges/${badge.id}/edit`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
              </div>
              <div>
                {/** Al presionar el boton se invoca el prop de abrir el modal */}
                <button
                  onClick={props.onOpenModal}
                  className="btn btn-danger mt-2"
                >
                  Delete
                </button>
                {/**
                Es en este punto donde mando a renderizar el modal si se presiona el boton de eliminar. Sin embargo, el componente
                es una composicion del Modal principal (generico), el cual mediante los PORTALES de React, se renderiza fuera
                del contexto de la app. 

                Por tanto le comparto cierta información, tal como si debe estar abierto, y props de tipo evento para cerrarse
                asi como para notificar de que se necesita eliminar el bardge seleccionado
                
                Esta informacion la necesita para sus botones de cerrar, cancelar, eliminar. Así como para ser visible en pantalla
                 */}
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
