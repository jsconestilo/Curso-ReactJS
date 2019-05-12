import React from "react";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

import api from "../api";

/**
 * Este componente es el encargado de la lógica de negocio (Container)
 * posteriormente...
 * Se renderiza otro componente que es el encargado de la presentación de los datos
 */
class BadgeDetailsContainer extends React.Component {
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
     * Por buenas prácticas renderizamos el componente encargado de la presentación
     * de los datos, pasando esos mismos datos.
     */

    return <BadgeDetails badge={this.state.data} />;
  }
}

export default BadgeDetailsContainer;
