import React from "react";
import { usePDF } from 'react-to-pdf';
import TablaCliente from "./TablaCliente";
import TablaSeveral from "./TablaSeveral";

const Home = () => {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  return (
    <>
      <section>
        <section ref={targetRef}>
          <TablaCliente />
          <TablaSeveral />
          <button onClick={() => toPDF()}>Download PDF</button>
        </section>
      </section>
    </>
  );
};

export default Home;
