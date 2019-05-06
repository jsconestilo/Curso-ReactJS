import React, { Component } from "react";

/**
 * EXPLICACION 1
 *
 * Nuestos componentes deben permitir a los usuarios interactual con ellos
 * Por ello es importante estar atentos a los eventos
 * Las funciones controladoras de eventos, se definen como métods del componente
 *
 * Como vamos a necesitar hacer referencia al estado de nuestro componente
 * es importante declarar estas funciones controladoras de eventos como
 * arrow functions
 * Debido a que vamos estar haciendo referencia a this constantemente
 * De lo contrario debemos bindearlo
 *
 * Por buenas practicas es recomendable colocarles el prefijo handler
 */
class BadgeForm extends Component {
  // Esta es una función que permite controlar el evento para nuestra caja de texto
  // Cada vez que cambia la info, se emite un evento de tipo change
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };
  // Función controladora de evento de tipo click para el boton 1 de formulario
  handleClick = e => {
    // Forma para prevenir el comportamiento por defecto del boton dentro del formulario
    e.preventDefault();
    console.log("El formulario fué enviado");
  };
  // Función para controlar el evento de tipo submit la cual se activa al enviar el formulario
  // a través de un boton
  handleSubmit = e => {
    // Esta es otra forma para prevenir el submit del formulario
    e.preventDefault();
    console.log("El submit del formulario fue prevenido");
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        {/** Los eventos son los mismos que JS, y en lugar de pasarle una función con parentesis, solo se hace mencion del método
        puesto que no nos interesa ejecutarlo en ese momento, solo se hace una referencia a ellos para que despues se ejecuten  */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              className="form-control"
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          <button className="btn btn-primary">Save 2</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
