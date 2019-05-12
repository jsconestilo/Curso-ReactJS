import React, { Component } from "react";

/**
 * EXPLICACION 2:
 *
 * El estado de este componente lo desamos compartir con otros componentes
 * que se encuentran en la misma página donde este es tambien solicitado
 * (compartir estado entre hermanos)
 *
 * Para ello se declara el estado en la parte más superior que tenga acceso a los
 * componentes que desean compartir. En este caso en BadgeForm
 *
 */
class BadgeForm extends Component {
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            {/** Como el state se encuentra en un nivel superior, ahora este componente la
            recibe a través de sus props.
            Por tanto, para controlar el estado de los elementos input. Hago referencia la data compartida mediante el prop formValues*/}
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control"
              value={this.props.formValues.firstName}
            />
          </div>
          {/** Los componentes hijos no deben mutar el estado de los padres.
        Por tanto, cuando se activa el evento change del control input, invocamos al valor compartido a traves del prop onChange 
        Que es una funcion que se encarga de controlar el evento, la cual se encuentra
        definida en la página padre.
        De esta forma el control input le da a conocer el padre su nuevo estado*/}
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.props.formValues.astName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="email"
              className="form-control"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.props.formValues.twitter}
            />
          </div>
          <button className="btn btn-primary">Save</button>
          {/** 
          Condicional en JSX  
          Si props.error es true entonces (&&)
          muestra etiquetas p con el contenido del error

          Este mismo mecanismo nos puede servir para validar que ciertos campos cumplan con el tipo de nfo
          */}
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
