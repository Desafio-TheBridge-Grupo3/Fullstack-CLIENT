import React from "react";

const COtros = () => {
  return (
    <>
      <article>
        <article className="cotros">

          <label>Días Facturación</label>
          <input placeholder="--" type="number" />

          <label>Energía reactiva</label>
          <input placeholder="--" type="number" />

          <label>Impuesto eléctrico</label>
          <input placeholder="--" type="number" />

          <label>Alquiler equipo</label>
          <input placeholder="--" type="number" />

          <label>IVA</label>
          <select name="iva" id="iva">
            <option value={0.21}>21%</option>
            <option value={0.05}>5%</option>
            <option value={0.10}>10%</option>
          </select>

          <label>Otros conceptos</label>
          <input placeholder="--" type="number" />
          {/* añadir switch aquí */}

          <label>Otros conceptos</label>
          <input placeholder="--" type="number" />
          {/* añadir switch aquí */}

        </article>
      </article>
    </>

  );
};

export default COtros;
