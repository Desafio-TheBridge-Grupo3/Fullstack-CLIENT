import React from "react";
import { usePDF } from "react-to-pdf";
import ProgressBar from "@ramonak/react-progress-bar";

const Oferta = () => {
  const { toPDF, targetRef } = usePDF({ filename: "SeveralComparator.pdf" });

  return (
    <>
      <div ref={targetRef}>
        <main>
          <header id="headerPDF">
            <img src="src\assets\logo.png" alt="Logo several" id="logoPDF" />
          </header>
          <section id="top">
            <section id="topLeft">
              <h4 id="nombreAsesor">Paloma Ocanha</h4>
              <h5 id="emailAsesor">palomaocanha@severalenergy.com</h5>
              <article id="infoContainer">
                <div id="titulos">
                  <p className="t1">Nombre/Razón</p>
                  <p className="t1">Dirección</p>
                  <p className="t1">CUPS</p>
                  <p className="t1">Fecha</p>
                </div>
                <div id="informacion">
                  <p className="t2">Texto</p>
                  <p className="t2">Texto</p>
                  <p className="t2">ES0031405427789030NV0F</p>
                  <p className="t2">xx/xx/xxxx</p>
                </div>
              </article>
            </section>
            <section id="topRight">
            <h1 id="graphTitle">Ahorro con propuesta Several</h1>
              <article id="graphContainer">
                <div className="factura">
                  <h2 className="mTitle">Factura actual</h2>
                  <h1 className="proposal">4.789,86€</h1>
                  <ProgressBar completed={50} bgColor="#C1240C" baseBgColor="#EBD7D8"/>
                </div>
                <div className="factura">
                  <h2 className="mTitle">Factura anual</h2>
                  <h1 className="proposal">4.789,86€</h1>
                  <ProgressBar completed={50} bgColor="#C1240C" baseBgColor="#EBD7D8"/>
                </div>
              </article>
            </section>
          </section>
          <section id="middle">
            <article id="middleTitle">
              <h1 className="mTitle">Datos de Factura actual</h1>
              <h3 className="mTitle2">Días de facturación: 37</h3>
            </article>
            <article id="middleTabla"></article>
            <article id="middleTotal">
              <div className="totalContainer">
                <h3 className="totalTitulo">Total factura</h3>
                <h3 className="totalNum">xxx,xx €</h3>
              </div>
              <div className="totalContainer">
                <h3 className="totalTitulo">Total anual estimado</h3>
                <h3 className="totalNum">xx.xxx,xx €</h3>
              </div>
            </article>
          </section>
          <section id="bottom">
            <article id="bottomTitle">
              <h1 className="mTitle">Datos de Factura actual</h1>
            </article>
            <article id="bottomTabla"></article>
            <article id="bottomTotal">
              <div className="totalContainer">
                <h3 className="totalTitulo">Total factura</h3>
                <h3 className="totalNum">xxx,xx €</h3>
              </div>
              <div className="totalContainer">
                <h3 className="totalTitulo">Total anual estimado</h3>
                <h3 className="totalNum">xx.xxx,xx €</h3>
              </div>
            </article>
            <article id="bottomTextContainer">
              <h4>
                Propuesta valida durante 7 (siete) dias desde la fecha de la
                propuesta.
              </h4>
              <h5>Documentación para efectuar la modificación propuesta:</h5>
              <h5>
                (1) DNI Firmante (2) Copia Facturas (3) Recibo Bancario - (4)
                CIF de la empresa
              </h5>
            </article>
          </section>
          <button onClick={() => toPDF()}>Generar PDF</button>
        </main>
      </div>
    </>
  );
};

export default Oferta;
