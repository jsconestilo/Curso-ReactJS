import React, { Component } from "react";

/**
 * EXPLICACION 1
 *
 * Los componentes reciben información desde sus props. Sin emabrgo, en la mayoria de las ocasiones
 * es necesario que los propios componentes generen su propia información (estado) y decidan compartirlo con otros componentes.
 * Por tanto la tienen que guardar para proceder a gestionarla (a través de sus métodos controladores de eventos)
 *
 * La clave está en que la información del state de los componentes, pasará en una sola dirección hacia otros componentes y podrá ser consumid
 * a pero no modificada.
 *
 * Para guardar la información en el estado se usa una función de la clase Component llamada setState
 * a la cual se le debe pasar un objeto con la información que se quiere guardar.
 *
 * Aunque no se ve, la información está siendo guardada en dos sitios.
 * Cada input guarda su propio valor y al tiempo la está guardando en setState,
 * lo cual no es ideal.
 * Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.
 */
class BadgeForm extends Component {
  // Es importante inicializar el estado para este componente,
  // El nombre de sus claves es el name de los controles de formulario (son como los v-model de VueJS)
  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""
  };
  // Esta es una función que permite controlar el evento para nuestra caja de texto
  // Cada vez que cambia la info, se emite un evento de tipo change
  handleChange = e => {
    /**
     * Todos los input invocan a esta función cuando sus valores cambian. Por tanto, se establece su estado
     * en el state del componente, colocando como clave el nombre del control y como valor su correspondiente valor del propio elemento
     * esta entre corchetes para que la asignación del nombre y su valor sea dinámica
     * y no tener que crear un método controlador de evento para cada input
     */
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // Función controladora de evento de tipo click para el boton de formulario
  handleClick = e => {
    // Forma para prevenir el comportamiento por defecto del boton dentro del formulario
    e.preventDefault();
    console.log("El formulario fué enviado");
    // Recuperamos el estado actual del componente (almacenado en el state)
    // Por ello es importante que estas funciones sean de tipi arrow, de lo contrario sería necesario bindear this
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        {/** Los eventos en lugar de pasarle una función con parentesis como valor, solo se hace mencion del método controlador del evento */}
        <form>
          <div className="form-group">
            <label>First Name</label>
            {/** Por defecto la información que esta en el control se guarda en el state del componente
            Pero, hacer esto genera que se guarde la informacion en dos lugares distintos - el state y el elemento del formulario
            Por tanto, es necesario indicar en el elemento de formulario que su estado debe ser controlado
            Para ello se establece en el atributo value, el valor que se tiene almacenado en el state para dicho elemento
            DIGAMOS QUE ESTO ES COMO EL DATA-BINDING -- v-model de VueJS */}
            <input
              onChange={this.handleChange}
              type="text"
              name="firstName"
              className="form-control"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
