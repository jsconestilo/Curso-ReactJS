import React from "react";
import { Link } from "react-router-dom";
// Cada elemento de Badge en la lista ahora es un componente
import BadgeListItem from "./BadgeListItem";
/**
 * Este componente se ha cambiado de una clase a una función.
 * El motivo es que con componentes funcionales podemos hacer uso de los Hooks
 * que nos da React para tener acceso al state, ciclo de vida y otras cosas desde etnro de las funciones.
 *
 * Esto se puede hacer facilmente con los componetnes de clase. Pero en ocasiones resultan ser muy costosas
 */
function BadgesList(props) {
  const badges = props.badges;
  /**
   * Todo lo encapsulo en un Hook personalizado, que se dedica a buscar y filtrar los badges
   *
   */
  function useSearchBadges(badges) {
    /**
     * Primer Hook para colocar algo en el estado de este componente funcional
     * nos interesa el query (busqueda)
     * y los resultados filtrados (filteredBadges) con base en la busqueda
     *
     */
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(badges);
    /**
     * Este hook se emplea para memorizar los resultados obtenidos con anterioridad
     * El primer momento ejecuta el primer parametro, que es la funcipon para filtrar la información
     * y establecer esos resultados en el estado
     *
     * La segunda vez trata de verificar si ha cambiado el [basges o la query]
     * de ser asi vuelve a ejecutar la función, de lo contraroo
     * solo arroja lo que tiene en cache
     *
     * De esta forma el filtrado es mas sencillo y la aplicación se torna mpas rapida
     */
    React.useMemo(() => {
      const results = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setFilteredBadges(results);
    }, [badges, query]);

    /**
     * Para que este hook personalizado pueda ser usado en la app, tiene que retornar
     * algunos valores.
     * Desde fuera se necesita el query solicitado
     * estabecer nuevo query
     * y los resultados filtrados
     */
    return { query, setQuery, filteredBadges };
  }

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        {/**
        Este elemento de forumario se convierte en un elemetno controlado,
        puesto que a través de el se vincula el estado de este componente en dos vias. */}
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create new Badge
        </Link>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
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
    </React.Fragment>
  );
}

export default BadgesList;
