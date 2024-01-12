import React from "react";
import Oferta from './Oferta'
import TablaSeveral from './TablaSeveral'
import TablaCliente from './TablaCliente'
import FormChartComponent from "./TablaSeveral/FormChartComponent/FormChartComponent";


const Main = () => {
  return (
    <>
      <TablaCliente />
      <FormChartComponent />
      <TablaSeveral />
      {/* <Oferta/> */}
    </>
  )
};

export default Main;
