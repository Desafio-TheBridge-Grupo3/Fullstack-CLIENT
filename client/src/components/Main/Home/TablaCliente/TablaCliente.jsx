import React from "react";
import Franja from "./Franja"
import Energia from "./Energia"
import Potencia from "./Potencia"

const TablaCliente = () => {
  return (
    <>
      <section className="tablaGrande">
        <h1 className="tituloTabla">Compañía actual</h1>
        <article>
          <select className="compañia" name="compañia" id="compañia">
            <option value="endesa">Endesa</option>
            <option value="iberdrola">Iberdrola</option>
            <option value="naturgy">Naturgy</option>
            <option value="acciona">Acciona</option>

          </select>
        </article>
        <article className="tabla">
          <Franja />
          <Energia />
          <Potencia />
        </article>
      </section>
    </>
  )
};

export default TablaCliente;
