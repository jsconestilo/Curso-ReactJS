import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
/**
 * Este componente tiene una responsabilidad única.
 * El mostrar a manera de listado, la información de cada uno de los participantes registrados
 * en la data del componente padre (pagina)
 * Misma que le es pasada a través del props badges
 */
class BadgesList extends React.Component {
  /**
   * Antes de renderizar el contenido principal del componente, debemos verificar si hay datos en la respuesta de la API
   * En caso contrario, retornamos JSX alternativo para invitar al usuario a ser el primero en crear un badge
   */
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new Badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {/** El valor recibido a través del prop badges, es un arreglo de objetos.
        En javascript se tiene el método map( ), el cual permite acceder a cada uno de los elementos del arreglo
        para procesarlos (maperlos) y al finalizar retornarlos */}
        {this.props.badges.map(badge => {
          return (
            // Cada hijo de una lista, está obligado a recibir un identificador único.
            // Para que react le de un seguimiento, y si en un determinado momento cambia, proceder a renderizarlo
            <li key={badge.id} className="BadgesListItem">
              <img
                src={badge.avatarUrl}
                alt="logoAvatar"
                className="BadgesListItem__avatar"
              />
              <div>
                <h5>
                  {badge.firstName} {badge.lastName}
                </h5>
                <a href={"https://twitter.com/" + badge.twitter}>
                  @{badge.twitter}
                </a>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
