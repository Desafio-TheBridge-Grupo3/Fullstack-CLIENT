import React from "react";
import { useNavigate } from "react-router-dom";
import TablaCliente from "./TablaCliente";
import TablaSeveral from "./TablaSeveral";

const Home = () => {

  const navigate = useNavigate()
  const generarPDF = () => {
    navigate("/pdf");
  };



  return (
    <>
      <section>
        <section >
          
            <TablaCliente />
            <TablaSeveral />
          
          <button onClick={generarPDF}>Generar PDF</button>

        </section>
      </section>
    </>
  );
};

export default Home;
