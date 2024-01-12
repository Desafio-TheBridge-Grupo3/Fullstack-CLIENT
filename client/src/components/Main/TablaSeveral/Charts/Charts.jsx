import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Charts = () => {
  return (
    <>
      <section id="actual">
        <h3>Ahorro factura actual</h3>
        <article id="chart1">
          <ProgressBar now={60} label={`${60}%`} />;
        </article>
        <h1>Cifra</h1>
      </section>

      <section id="anual">
        <h3>Ahorro anual</h3>
        <article id="chart2">
        <ProgressBar now={60} label={`${60}%`} />;
        </article>

        <h1>Cifra</h1>
      </section>
    </>
  )
};

export default Charts;
