import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MacroContext } from "../../../../../context/MacroContext";


const Charts = () => {

  const { otros } = useContext(MacroContext);

const ahorroActual = (otros.importeTotalFacturaCliente - otros.importeTotalFacturaSeveral);
const ahorroAnual = (otros.importeAnualEstimadoCliente - otros.importeAnualEstimadoSeveral)


  return (
    <>
      <section id="actual">
        <h3>Ahorro factura actual</h3>
        <article id="chart1">
        </article>
        <h1>{ahorroActual}</h1>
      </section>

      <section id="anual">
        <h3>Ahorro anual</h3>
        <article id="chart2">

        </article>

        <h1>{ahorroAnual}</h1>
      </section>
    </>
  )
};

export default Charts;
