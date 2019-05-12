import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";

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
                <button className="btn btn-danger mt-2">Delete</button>
                {/** Aqui vamos a representar el modal para confirmar la eliminación. Pero
                a nivel semantico no es lo más correcto, quizá por problemas de una clase de estilo, etc,
                generalmente los problemas se presentan por z-index u overflow
                
                Por tanto empleamos los PORTALES de React.
                para indicarle que elemento necesitamos renderizar y donde (quizá fuera el ambito de la app) */}
                {ReactDom.createPortal(
                  <h3>Hola yo soy el contenido a renderizar en otra parte</h3>,
                  document.getElementById("modal")
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
