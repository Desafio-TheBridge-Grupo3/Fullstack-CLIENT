import React, { useContext, useState, useEffect } from "react";
import { MacroContext } from "../../../../../context/MacroContext";

const STotal = () => {

const {otros, tablaCliente, tablaSeveral} = useContext(MacroContext);

const [totalFactura, setTotalFactura] = useState([])
  const [totalAnual, setTotalAnual] = useState([])

  useEffect(()=>{
    const sumaFactura =(tablaSeveral.totalEnergiaFacturaSev + tablaSeveral.totalPotenciaFacturaSev + otros.otrosConceptos)* (1 + otros.iva)
    const totalFactura = sumaFactura.toFixed(2)
    setTotalFactura(totalFactura)
  }, [tablaSeveral.totalEnergiaFacturaSev,tablaSeveral.totalPotenciaFacturaSev, otros.otrosConceptos, otros.iva])


  useEffect(()=>{
    const sumaAnual = (tablaSeveral.totalEnergiaAnualSev + tablaSeveral.totalPotenciaAnualSev + (otros.otrosConceptosAnuales*2))
    
    setTotalAnual(sumaAnual)
  }, [tablaSeveral.totalEnergiaAnualSev, tablaSeveral.totalPotenciaAnualSev, otros.otrosConceptosAnuales])

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

export default STotal;
