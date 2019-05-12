import React from "react";
import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";
/**
 * Componente funcional para mostrar la informacion de un badge en especifico (listado)
 * el prop recibido contiene la info del badge a mostrar
 *
 * Contiene sus propios estilos CSS y un componente adicional para mostrar el avatar del usuario
 *
 * Este componente es el resultado de la refactorización del componente BadgeList
 */
function BadgeListItem(props) {
  return (
    <div className="BadgesListItem">
      <Gravatar email={props.badge.email} className="BadgesListItem__avatar" />
      <div>
        <h5>
          {props.badge.firstName} {props.badge.lastName}
        </h5>
        <a href={"https://twitter.com/" + props.badge.twitter}>
          @{props.badge.twitter}
        </a>
        <p>{props.badge.jobTitle}</p>
      </div>
    </div>
  );
}

export default BadgeListItem;
