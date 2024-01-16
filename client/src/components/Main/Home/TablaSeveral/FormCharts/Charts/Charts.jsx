import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useContext } from "react";
import { MacroContext } from "../../../../../../context/MacroContext";


const Charts = () => {

  const { otros } = useContext(MacroContext);

const ahorroActual = (otros.importeTotalFacturaCliente - otros.importeTotalFacturaSeveral)
const ahorroAnual = (otros.importeAnualEstimadoCliente - otros.importeAnualEstimadoSeveral)

const porcentajeActual = (ahorroActual * 100) / otros.importeTotalFacturaCliente
const porcentajeAnual = (ahorroAnual * 100) / otros.importeAnualEstimadoCliente

const porcentajeFixed1 = porcentajeActual.toFixed(0)
const porcentajeFixed2 = porcentajeAnual.toFixed(0)

return (
  <>
    <section id="chartsComponent">
      <section id="actual">
        <h3>Ahorro factura actual</h3>
        <h1>{ahorroActual}</h1>
        <article id="chart1">
          <ProgressBar variant='danger' now={porcentajeActual} label={`${porcentajeActual}%`} />
        </article>
      </section>

      <section id="anual">
        <h3>Ahorro anual</h3>
        <h1>{ahorroAnual}</h1>
        <article id="chart2">
          <ProgressBar variant='danger' now={porcentajeAnual} label={`${porcentajeAnual}%`} />
        </article>
      </section>
    </section>
  </>
);
};

export default Charts;
