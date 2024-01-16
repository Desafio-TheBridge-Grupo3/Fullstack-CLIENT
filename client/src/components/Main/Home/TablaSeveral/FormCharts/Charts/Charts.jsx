import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useContext } from "react";
import { MacroContext } from "../../../../../../context/MacroContext";


const Charts = () => {

  const { otros } = useContext(MacroContext);

const ahorroActual = (otros.importeTotalFacturaCliente - otros.importeTotalFacturaSeveral);
const ahorroAnual = (otros.importeAnualEstimadoCliente - otros.importeAnualEstimadoSeveral)
const porcentajeActual =0
const porcentajeAnual =0

return (
  <>
    <section id="chartsComponent">
      <section id="actual">
        <h3>Ahorro factura actual</h3>
        <h1>{ahorroActual}</h1>
        <article id="chart1">
          <ProgressBar variant='danger' now={porcentajeActual} label={`${porcentajeActual}%`} />;
        </article>
      </section>

      <section id="anual">
        <h3>Ahorro anual</h3>
        <h1>{ahorroAnual}</h1>
        <article id="chart2">
          <ProgressBar variant='danger' now={porcentajeAnual} label={`${porcentajeAnual}%`} />;
        </article>
      </section>
    </section>
  </>
);
};

export default Charts;
