import React from "react";
import "./styles/PageLoading.css";
// Este es un componente que contiene el HTML y CSS necesario para mostrar una animacion de CSS con efecto de loading
import Loader from "./Loader";

function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
}

export default PageLoading;
