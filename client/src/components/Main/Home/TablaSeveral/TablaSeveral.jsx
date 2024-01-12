import React from "react";
import Franja from '../TablaCliente/Franja';
import SEnergia from './SEnergia';
import SPotencia from './SPotencia';
import Form from './Form';
import Charts from './Charts'

const TablaSeveral = () => {
  return (
    <>
      <section className="tablaGrande">
        <h1 className="tituloTabla">Propuesta Several</h1>
        <Form/>
        <Charts/>
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