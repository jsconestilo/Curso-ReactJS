import React, { Component } from "react";

import "./styles/BadgeEdit.css";
import logo from "../images/platziconf-logo.svg";

import api from "../api";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
/**
 * Este componente es muy similar al de BadgeNew.
 * Sus cambios radican en que al solicitar dicho componente se debe hacer una llamada a la API para traer los datos del badge a editar
 * Asi como actualizar los datos enviados a través del formulario
 */
class BadgeEdit extends Component {
  /**
   * Cuando se renderiza el componente su estado es el siguiente.
   * Hay loading puesto que se esta solicitando la info del badge a editar
   * No hay error y porsupuesto, aun no hay data que mostrar en el formulario de edicion
   */
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };
  /**
   * Mecanismo Two way data binding
   */
  handleChange = e => {
    this.setState({
      form: {
        // Conservamos la data anterior
        ...this.state.form,
        // y modiicamos el valor de los elementos del formulario que han cambiado
        [e.target.name]: e.target.value
      }
    });
  };
  /**
   * Método controlador de evento submit para actualizar el contenido del badge seleccionado
   */
  handleSubmit = async e => {
    e.preventDefault();
    // Se muestra el loading sin error
    this.setState({ loading: true, error: null });
    try {
      // Esperamos a que se actulicen los datos del badge seleccionado, con la data del formulario
      // El id del badge se obtiene del parametro de ruta enviado a este componente
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      // Reestablecemos el estado del componente
      this.setState({
        loading: false,
        form: {
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          twitter: ""
        }
      });
      // Redireccionamos a una ruta diferente
      this.props.history.push("/badges");
    } catch (error) {
      // En caso de error estableceos el estado con los datos necesarios
      this.setState({ loading: false, error: error });
    }
  };

  // Al terminar de cargarse este componente, solicitamos traer datos desde una API
  // Puesto que este componete se activa tras seleccionar un badge a editar
  componentDidMount() {
    this.fetchData();
  }

  /**
   * La data es de consulta a la API.
   * Pasando como parametro el id del badge a editar. mismo que se conoce a traves del paramtro de consulta enviado a este comoonente
   * por el sistema de rutas
   */
  fetchData = async e => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    /**
     * Cuando se registran nuevos Badges, lo mejor es mostrar en la interfaz un elelento de loading,
     * por ello condiciamos, si la peticion esta en proceso, renderizamos dicho componente. En caso contrario
     * se renderiza el contenido por defecto del componente
     */
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://www.gravatar.com/avatar/0fcf77b7bc594393ac42cebfe45e7179"
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
