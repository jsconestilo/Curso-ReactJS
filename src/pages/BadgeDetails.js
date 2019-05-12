import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgeDetails.css";

import confLogo from "../images/platziconf-logo.svg";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import Badge from "../components/Badge";

/**
 * Este componente se encarga de mostrar los detalles del Badge seleccionado
 * Por tanto su estado inicial es de carga sin error y sin data
 */
class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };
  /**
   * Al montarse este componente tiene que hacer una peticion a la API
   * para traer los datos del Badge seleccionado
   */
  componentDidMount() {
    this.fetchData();
  }
  /**
   * Establecemos el estado a carga y sin error
   * Intentamos traer los datos mediante consulta con el id del badge seleccionado,
   * el cual lo obtenemos desde el parametro de consulta proporcionado a este componente por el route
   * Si hay datos cambiamos nuestro estado sin carrga y con data
   * De lo contrario, quitamos el loader pero establecemos el error
   */
  fetchData = async e => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    /**
     * Si hay loader, se renderiza el componente de Loader
     * o si hay error, se muestra el componente de error
     */
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    /**
     * Si hay exito al consultar la API, mostramos la data obtenida a través
     * de los elementos internos de este componente.
     *
     * Para no tener que estar colocando this,state.data.firstName
     * declaramos una constante que contiene la data.
     * entonces accedemos mediante badge.firstName
     *
     */
    const badge = this.state.data;
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
