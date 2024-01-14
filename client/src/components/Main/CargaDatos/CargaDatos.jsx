import React from "react";
import { useState } from "react";

const CargaDatos = () => {

  const [selectedFile, setSelectedFile] = useState(null);


  return (
    <article id="metodo">
      <h2 id="pregunta">¿Cómo quieres cargar los datos?</h2>
      
      <button className="opciones">
        <input type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}
        />Subir factura</button>
      <p id="mini">Adjunta aquí tu factura. Formatos aceptados: .pdf y .jpg</p>
      <p>Rellenar datos manualmente</p>
    </article>
  );
};

export default CargaDatos;
