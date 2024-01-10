import React from "react";
import Franja from "./Franja"
import Energia from "./Energia"
import Potencia from "./Potencia"

const TablaCliente = () => {
  return (
    <>
    <div className="tabla1">
      <Franja />
      <Energia />
      <Potencia />
      </div>
    </>
  )
};

export default TablaCliente;
