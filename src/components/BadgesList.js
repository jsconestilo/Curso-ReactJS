import React from "react";
import { Link } from "react-router-dom";
// Cada elemento de Badge en la lista ahora es un componente
import BadgeListItem from "./BadgeListItem";

class BadgesList extends React.Component {
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
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              {/** Cada elemento de badge es un enlace de react que nos llevaría
              al componente de detalles generales de dicho badge seleccionado
              
              Por ello el destino es una ruta que contiene un valor dinámico, el cual es tomado
              como valor del parametro de consulta badgeId declarado en la ruta*/}
              <Link
                to={`/badges/${badge.id}`}
                className="text-reset text-decoration-none"
              >
                {/** Refactorización del codigo de este componente. El contenido de cada item
              se movio a un nuevo componente para que muestre dicha informacion.
              Se le compoarte información del badge en cuestion */}
                <BadgeListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
