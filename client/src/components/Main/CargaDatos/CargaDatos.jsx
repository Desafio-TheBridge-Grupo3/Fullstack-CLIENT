import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const CargaDatos = () => {

  const navigate = useNavigate()

  const rellenarTabla=()=>{
    navigate(`/home`)
  }

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFile = (event) => {
    const archivo = event.target.files[0];
    setSelectedFile(archivo);
  };  

  const deshabilitado=()=>{
    console.log("Este botón está deshabilitado, sube un archivo")
  }


  return (
    <>
    <article className="carga">
    <article id="metodo">
      <h2 id="pregunta">¿Cómo quieres cargar los datos?</h2>
      
      <button className="opciones" >
        <input type="file" value={selectedFile}
        />Subir factura</button>
      <p id="mini">Adjunta aquí tu factura. Formatos aceptados: .pdf y .jpg</p>
      <p id="cambio" onClick={rellenarTabla}>Rellenar datos manualmente</p>
    </article>

    <button className={selectedFile ? 'boton-con-archivo' : 'boton-sin-archivo'} onClick={selectedFile? rellenarTabla : deshabilitado }>Continuar</button>
    </article>
    </>
  );
};

export default CargaDatos;
