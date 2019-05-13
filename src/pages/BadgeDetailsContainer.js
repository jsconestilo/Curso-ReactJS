import React from "react";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

import api from "../api";

/**
 * Para poder eliminar el Badge seleccionado, se hace uso de una ventana Modal, la cual debe aparecer
 * en el momento que el usuario presiona el boton de eliminar.
 * Por tanto, eso forma parte del estado general de la aplicación, saber si el modal esta abierto o cerrado
 */
class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
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
  /**
   * Controlador para abrir el modal
   */
  handelOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };
  /**
   * Controlador para cerrar el modal
   */
  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };
  /**
   * Controlador para hacer la petición a la API y proceder a eliminar el Badge seleccionado
   */
  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });
      this.props.history.push("/badges");
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
     *
     * Internamente este componente se encarga de mandar a llamar el Modal para que se visualice,
     * por tanto le compartimos el estado para saber si se debe mostrar
     * asi como los controladores necesarios para que notifique que el modal se debe cerrar, volver a abrir y confirmar la eliminacion del badge
     *
     * Todo esto lo debe hacer el componente que contiene el estado general.
     */

    return (
      <BadgeDetails
        badge={this.state.data}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handelOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
      />
    );
  }
}

export default BadgeDetailsContainer;
