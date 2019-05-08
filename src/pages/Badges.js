import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

/**
 * El ciclo de vida de los componentes en React
 *
 * Cuando React renderiza los componentes decimos que entran en escena (MONTAJE),
 * cuando su estado cambia o recibe unos props diferentes se actualizan (ACTUALIZACION) y
 * cuando cambiamos de página se dice que se desmontan (DESMONTAJE).
 *
 * Montaje:
 * Representa el momento donde se inserta el código del componente en el DOM.
 * Se llaman tres métodos: constructor, render, componentDidMount.
 *
 * Actualización:
 * Ocurre cuando los props o el estado del componente cambian.
 * Se llaman dos métodos: render, componentDidUpdate.
 *
 * Desmontaje:
 * Nos da la oportunidad de hacer limpieza de nuestro componente.
 * Se llama un método: componentWillUnmount.
 */

class Badges extends React.Component {
  /**
   * Se declara el estado de este componente vacio.
   * Cuando el componente se termine de cargar se llenará el estado con la data correspondiente
   */
  state = {
    data: []
  };

  constructor(props) {
    // El constructor es el primer metodo a llamar cuando un componente se monta
    super(props);
    console.log("1. constructor()");
  }
  componentDidMount() {
    // El método componentDidMount es el tercer y ultimo método a llamar cuando un componente se Monta
    // En este punto el componente ya está dentro de escena
    console.log("3. componentDidMount()");
    // Simulamos una promesa... El estado de la app cambiará dentro de 3 segundos (se establecerpa data en el estado)
    // Esto generará que el componente se actualice
    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            irstName: "Freda",
            lastName: "Grady",
            email: "Leann_Berge@gmail.com",
            jobTitle: "Legacy Brand Director",
            twitter: "FredaGrady22221-7573",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Major",
            lastName: "Rodriguez",
            email: "Ilene66@hotmail.com",
            jobTitle: "Human Research Architect",
            twitter: "ajorRodriguez61545",
            avatarUrl:
              "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Markets Officer",
            twitter: "DaphneyTorphy96105",
            avatarUrl:
              "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
          }
        ]
      });
    }, 3000);
  }
  componentDidUpdate(prevProps, prevState) {
    // Este método es el último en llamar cuando un componente se actualiza
    // Es un excelente lugar para saber que estado y props nuevas han llegado al componente para
    // Proceder a compararlo con los datos anteriores.
    console.log("5. componentDidUpdate()");
    console.info({
      prevProps,
      prevState
    });
    console.info({
      propsNew: this.props,
      stateNew: this.state
    });
  }
  componentWillUnmount() {
    /**
     * Este método se invoca cuando un componente se desmonta (sale de escena)
     * Es un excelente lugar para recolectar basura y no perder memoria
     * Ejem.
     * La simulación de promesa se resolverá en 3 segundos.
     * Si antes de ello el usuario cambia de ruta, el componente se desmonta
     * y cuando la promesa se resuelva, esa info quedará al vacio y perderemos memoria
     */
    console.log("6. componentWillUnmount()");
    clearTimeout(this.timeoutId);
  }
  render() {
    // El método render es el segundo método en llamarse cuando un componente se monta
    // Pero, es el primer metodo en llamarse cuando el componente se actualia
    console.log("2/4. render()");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="Logo" className="Badges_conf-logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            {/** Para navegar entre rutas de la aplicación es necesario hacer uso del componente Link
            el cual pertenece a la librería de react-router-dom
            Internamente captura el click y previene que se recarge la página. Es necesario pasarle el prop to con la ruta destino 
            
            Importante: hacer uso de anclas normales <a>, haría que se recargue la página */}
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="BadgesList">
            <div className="Badges__container">
              {/** Este componente se le comparte la data almacenada en el estado del componente padre (la página)
               El objetivo es que internamente itere cada uno de los registros (objetos) y muestre esa información 
               a manera de listado*/}
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
