// Podemos usar destructuring de JS para solicitar los metodos que solo vamos a necesitar { }. Con esto me evito tener que escribit React.Component, solo Component
import React, { Component } from "react";
// Este componente de página requiere sus propios estilos de CSS y mostrar una imagen. Por tanto se importan
// Es importante mencionar que si los estilos CSS importan otras imagenes. Estas imagenes han de colocarse en sus lugares respectivos. de lo contrario, webpack no los encontrará y marcará error
import "./styles/BadgeNew.css";
import logo from "../images/badge-header.svg";
// Este componente de página requiere mostrar otros componentes como parte de su contenido interno. POr tanto los importamos
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

/**
 * EXPLICACION 1:
 *
 * Levantamiento del estado
 * Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes.
 * Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.
 *
 *
 *
 */
class BadgeNew extends Component {
  /**
   * Declaramos el estado a nivel de Página,
   * dado que necesitamos compartir el estado del formulario BadgForm a
   * nuestro componente de Badge
   *
   * Para ello es importante ordenar la data en subelementos (paths con otro objeto)
   * En este caso hay data compartida, la del form, por ello lo colocamos en un path aparte
   *
   * Es importante inicializar nuestro estado...
   */
  state = {
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
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/** Ahora como esta página contiene el estado compartido por otros componentes.
              es posible acceder a el para hacer uso de dicha indformacion
              En este caso, nos interesa pintar la info que se coloca desde el formulario. */}
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar/0fcf77b7bc594393ac42cebfe45e7179"
              />
            </div>
            <div className="col-6">
              {/** Ahora mediante props, le compartimos el state al componente del formulario. 
              Para que internamente haga uso de ella.
              En este caso controle sus elementos input con la data proporcionada, en su atributo value
              
              Y en el momento que cambie alguno de los datos de sus elementos
              active el prop onChange, 
              que a su vez ejecuta la funcion controladora del evento */}
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
