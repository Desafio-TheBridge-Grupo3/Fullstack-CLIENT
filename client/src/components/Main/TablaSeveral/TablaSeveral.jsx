import React from "react";
import Franja from '../TablaCliente/Franja';
import SEnergia from './SEnergia';
import SPotencia from './SPotencia';


const TablaSeveral = () => {
  return (
    <>
      <section className="tablaGrande">
        <article className="tabla">
          <Franja />
          <SEnergia />
          <SPotencia />
        </article>
      </section>
    </>
  )
};

export default TablaSeveral;
