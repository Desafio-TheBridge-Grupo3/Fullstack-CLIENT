import React from "react";
import { usePDF } from 'react-to-pdf';
import Oferta from './Oferta'
import TablaSeveral from './TablaSeveral'
import TablaCliente from './TablaCliente'


const Main = () => {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <>
    <main>
      
      <div ref={targetRef}>
        <TablaCliente />
        <TablaSeveral />
      </div>
      {/* <Oferta/> */}
      </main>
    </>
  )
};

export default Main;
