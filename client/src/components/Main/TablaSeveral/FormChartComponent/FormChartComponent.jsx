import React from "react";
import Form from './Form';
import Charts from './Charts'

const FormChartComponent = () => {
  return (
    <>
    <section className="formProposalSection">
    <h1 className="tituloTabla">Propuesta Several</h1>
      <section className="formChart">
        <Form/><Charts/>
      </section>
      </section>
    </>
  )
};

export default FormChartComponent;
