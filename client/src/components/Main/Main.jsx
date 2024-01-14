import React from "react";
import { usePDF } from 'react-to-pdf';
import Oferta from './Oferta'
import TablaSeveral from './TablaSeveral'
import TablaCliente from './TablaCliente'
import Metodo from "./Metodo/Metodo";
import CargaDatos from "./CargaDatos/CargaDatos";


const Main = () => {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <>
      <CargaDatos/>
      
       {/*  <TablaCliente />
        <TablaSeveral />
       */}
      {/* <Oferta/> */}
    </>
  )
};

export default Main;
