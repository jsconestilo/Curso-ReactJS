import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
// Estos son componentes que mejoran la experiencia de usuario al momento de consultar una API
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

// Este es un archivo que funge como un wrapper para hacer llamadas a una API
/**
 * Internamente hace llamadas a un servidor JSON que se encuentra declarado dentro de la carpeta server
 * Para poder funcionar requiere dependencias de desaarrollo, las cuales han sido instaladas mediante NPM
 * y para poderlo arrancar, se realizó modificaciones en el achivo package.json
 * "start": "npm-run-all -p client server"
 * "client": "react-scripts start",
 *  "server": "json-server --port 3001 --watch server/db.json",
 *  "seed": "node server/seed.js",
 */
import api from "../api";

/**
 * Peticiones a una API
 *
 * El hacer llamadas a una API presenta 3 estados.
 * Loading (cuando se hace la peticion)
 * Data (cuando la promesa del llamado a la API se resuelve y retorna los datos)
 * Error (cuando la promesa es rechazada)
 *
 * Cuando la promesa se resuelve, se presentan dos escenaarios
 * Hay datos en la respuesta (deben mostrarse uno a uno)
 * No hay datos (por experiencia de usuario se debe de mostrar un boton para invitarlo a ser el primero en publicar algo)
 */

class Badges extends React.Component {
  /**
   * Cuando este componente entra en escenda, sus datos se encuentran indefinidos (puesto que se traen desde un API)
   * el loading es verdadero, porque al llamar la API se supone que esos datos se estan cargando
   * y por tanto no hay error
   */
  state = {
    data: undefined,
    loading: true,
    error: null
  };

  componentDidMount() {
    /**
     * El mejor lugar para hacer una llamada a la API es en este método, el cual se activa
     * cuando el componente esta completamente cargado y listo para recibir los datos
     */
    this.fetchData();
  }

  fetchData = async () => {
    // Cuando se hace petición a la API (en un futuro) por lógica comienza la carga y cualquier error anterior desaparece
    this.setState({
      loading: true,
      error: null
    });
    // Intentamos hacer la petición a la API
    try {
      /**
       * La API devuelve una promesa. esta situación es controlada mediante async/await
       * En caso de exito establecemos la data en el state
       * En caso de error (promesa rechazada) se captura y se establece el state de la aplicación con dicha información
       */
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      // Una promesa rechazada emite un error, aqui se captura y se establece el estado con esa información
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    /**
     * Si el loading es verdadero, la data aun no llega al componente,
     * por tanto se retorna un componente cuya misión es mostrar un loader animado
     * */
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    /**
     * Si hay error en la petición, se retorna un componente
     * el cual espera en su prop error el error acontecido tras consultar la API
     * Ese error se recupera del estado del componente
     */
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    // Si el loading es falso y no hay error, entonces procedemos a renerizar los elementos del componente
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
