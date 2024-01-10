import React from "react";
import Franja from '../TablaCliente/Franja';
import SEnergia from './SEnergia';
import SPotencia from './SPotencia';
import Form from './Form';

const TablaSeveral = () => {
  return (
    <>
      <section className="tablaGrande">
        <h1 className="tituloTabla">Propuesta Several</h1>
        <Form/>
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
