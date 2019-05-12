// Podemos usar destructuring de JS para solicitar los metodos que solo vamos a necesitar { }. Con esto me evito tener que escribit React.Component, solo Component
import React, { Component } from "react";
// Este componente de página requiere sus propios estilos de CSS y mostrar una imagen. Por tanto se importan
// Es importante mencionar que si los estilos CSS importan otras imagenes. Estas imagenes han de colocarse en sus lugares respectivos. de lo contrario, webpack no los encontrará y marcará error
import "./styles/BadgeNew.css";
import logo from "../images/platziconf-logo.svg";
// Este componente de página requiere mostrar otros componentes como parte de su contenido interno. POr tanto los importamos
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

// Para crear badge, se necesita requerir la API del servicio
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends Component {
  /**
   * Inicializamos el estado de este componente.
   * Al inicio no hay loading, puesto que el componente se renderiza y esperaría hasta que se envie un registro
   * Por tanto, tampoco hay error.
   * Los campos del formulario estaría en un primer momento vacios.
   */
  state = {
    loading: false,
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
   * Este es el método o función que se debe ejecutar
   * cuando la data cambie.
   * Es decir, si el form modifica su estado, ya sea porque los datos de alguno de sus elementos cambie
   * debemos setear esos cambios en el state.
   * Para ello se invoca al path correspondiente (form)
   * y...
   * para no sobreescribir. (DADO QUE LOS COMPONENTES EN REACT SE RENDERIZAN SI EL STATE O PROP CAMBIA -- TAMBIEN LO HACEN SUS HIJOS DESENDIENTES)
   * dejamos caer los valores anteriores del state con un spreat operator
   * y colocamos el nuevo valor
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
   * Este método controlador de evento Submit se ejecuta una vez enviado el formulario.
   * Sus acciones internas son asincronas (peticones a una API), por tanto, se hace uso de bloques async/await
   * Se previene el comportamiento por defecto
   * Se establece el estado a loading y error nulo, puesto que ya se envío la peticion
   *
   * y se intena establecer conexion con la API pasando los datos del estado del formulario
   * Si todo es correcto, reestablecemos el estado de este componente
   * y redireccionamos a la ruta /badges
   */
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
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
      /**
       * Redireccional al usuairo a la ruta de /badges
       * El prop history lo inyecta automáticamente el sistema de rutas de react
       */
      this.props.history.push("/badges");
    } catch (error) {
      // Si la peticion a la API retorna un error, se retira el loading pero se establece en el estado el error generado
      // Mismo que se le comparte al componente de fomrulario para que lo renderice en su interior
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
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/** Ahora como esta página contiene el estado compartido por otros componentes.
              es posible acceder a el para hacer uso de dicha indformacion
              En este caso, nos interesa pintar la info que se coloca desde el formulario.
              
              En caso que la info del state referente al form este vacia, se colocan las leyendas
              escritas en mayusculas*/}
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
              {/** Ahora mediante props, le compartimos el state al componente del formulario. 
              Para que internamente haga uso de ella.
              En este caso controle sus elementos input con la data proporcionada, en su atributo value
              
              Y en el momento que cambie alguno de los datos de sus elementos
              active el prop onChange, 
              que a su vez ejecuta la funcion controladora del evento declarada en este componente
              
              Finalmente, si al momento de crear el badge (registro) sucede un error, esa información se comparte
              con el componente para que lo muestre en donde crea necesario.  */}
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

export default BadgeNew;
