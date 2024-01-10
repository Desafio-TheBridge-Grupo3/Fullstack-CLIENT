import React from "react";
import Oferta from './Oferta'
import Cosa from './Cosa'
import Prueba from './Prueba'
import Vacio from './Vacio'

const Main = () => {
  return (
    <>
      <div>
        Esta será la página de main donde se renderizan todos los componentes
      </div>
      <Oferta />
      <Cosa />
      <Prueba />
      <Vacio />
    </>
  )
};

export default Main;
