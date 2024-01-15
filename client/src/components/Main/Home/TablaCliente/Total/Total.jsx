import React, { useContext, useState, useEffect } from "react";
import { MacroContext } from "../../../../../context/MacroContext";

const Total = () => {

  const { otros, tablaCliente } = useContext(MacroContext);
  const [totalFactura, setTotalFactura] = useState([])
  const [totalAnual, setTotalAnual] = useState([])


  //importe total factura = (total pago factura energía +total pago factura potencia) x (1 +0,21) (porque IVA =21%)
  useEffect(() => {
    const sumaFactura = (tablaCliente.totalEnergiaFacturaC + tablaCliente.totalPotenciaFacturaC + otros.impuestoElectrico + otros.alquilerEquipo + otros.energiaReactiva + otros.otrosImporte1 + otros.otrosImporte2) * (1 + otros.iva)
    const totalFactura = sumaFactura.toFixed(2)
    setTotalFactura(totalFactura)
  }, [tablaCliente.totalEnergiaFacturaC, otros.energiaReactiva, otros.alquilerEquipo, otros.otrosImporte1, tablaCliente.totalPotenciaFacturaC, otros.impuestoElectrico, otros.otrosImporte2, otros.iva])
  
  useEffect(() => {
    let sumaAnual = 0
    if(otros.otrosAnual1 ==true){
      sumaAnual = (tablaCliente.totalEnergiaAnualC + tablaCliente.totalPotenciaAnualC + otros.otrosImporte1*12 ) * (1 + otros.iva)
    } else if(otros.otrosAnual2 ==true){
      sumaAnual = (tablaCliente.totalEnergiaAnualC + tablaCliente.totalPotenciaAnualC  + otros.otrosImporte2*12 ) * (1 + otros.iva)
    } else if(otros.otrosAnual1==true && otros.otrosAnual2==true){
      sumaAnual = (tablaCliente.totalEnergiaAnualC + tablaCliente.totalPotenciaAnualC + otros.otrosImporte1*12 + otros.otrosImporte2*12 ) * (1 + otros.iva)
    } else{
      sumaAnual = (tablaCliente.totalEnergiaAnualC + tablaCliente.totalPotenciaAnualC) * (1 + otros.iva)
    }
    const totalAnual = sumaAnual.toFixed(2)
    console.log(totalAnual)
    setTotalAnual(totalAnual)
  }, [tablaCliente.totalEnergiaAnualC, otros.otrosImporte1, otros.otrosAnual1, tablaCliente.totalPotenciaAnualC, otros.otrosImporte2, otros.otrosAnual2, otros.iva])

  return (
    <>
      <article className="resultadosTotales">
        <h3 className="totfac">Importe Total Factura</h3>
        <h3 className="totfac">{totalFactura} €</h3>
        <h3 className="totan">Total anual estimado</h3>
        <h3 className="totan">{totalAnual} €</h3>
      </article>
    </>
  );
};

export default Total;
