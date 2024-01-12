import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Charts = () => {
  return (
    <>
      <section id="chartsComponent">
        <section id="actual">
          <h3>Ahorro factura actual</h3>
          <h1>Cifra</h1>
          <article id="chart1">
            <ProgressBar variant='danger' now={60} label={`${60}%`} />;
          </article>
        </section>

        <section id="anual">
          <h3>Ahorro anual</h3>
          <h1>Cifra</h1>
          <article id="chart2">
            <ProgressBar variant='danger' now={60} label={`${60}%`} />;
          </article>
        </section>
      </section>
    </>
  );
};

export default Charts;
