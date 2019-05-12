import React from "react";
import md5 from "md5";

/**
 * Este componente funcional se encarga de mostrar el avatar del usuario con base en el email proporcionado
 * Gravatar es el prestador de servicio de avatar
 * Para ello a través de una URL se puede saber el avatar de un usuario proporcionando su email hasheado a MD5
 * Por ello se emplea la librería de MD5 instalada en este proyecto, para encriptar el email propocionado y sumarlo a dicha url
 */
function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);
  /**
   * El source de la imagen es la URL del servicio sumado a el email haseado a MD5
   * la clase CSS asignada a esta imagen es el valor del prop propocionado al componente, curiosamente con el mismo nombre
   */
  return (
    <img
      //src={`https://www.gravatar.com/avatar/${hash}`}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      className={props.className}
      alt="Avatar"
    />
  );
}

export default Gravatar;
