import React from "react";
import SFranja from './SFranja';
import SEnergia from './SEnergia';
import SPotencia from './SPotencia';

const TablaSeveral = () => {
  return (
    <>
      <section>
        <h1 className="tituloTabla">Propuesta Several</h1>
    
        <article className="tabla">
          <SFranja />
          <SEnergia />
          <SPotencia />
        </article>
      </section>
    </>
  )
};

export default TablaSeveral;
