import React, { useContext, useState, useEffect } from "react";
import { MacroContext } from "../../../../../context/MacroContext";

const Total = () => {

  const { otros, tablaCliente } = useContext(MacroContext);
  const [totalFactura, setTotalFactura] = useState([])
  const [totalAnual, setTotalAnual] = useState([])


//importe total factura = (total pago factura energía +total pago factura potencia) x (1 +0,21) (porque IVA =21%)
  useEffect(()=>{
const total = (tablaCliente.totalEnergiaFacturaC +  otros.energiaReactiva + otros.otrosImporte1) * (1 + otros.iva)

setTotalFactura(total)
  }, [tablaCliente.totalEnergiaFacturaC,  otros.energiaReactiva, otros.otrosImporte1, otros.iva])

  return (
    <>
    <article className="resultadosTotales">
      <h3 className="totfac">Importe Total Factura</h3>
      <h3 className="totfac">{totalFactura} €</h3>
      <h3 className="totan">Total anual estimado</h3>
      <h3 className="totan">X €</h3>
    </article>
    </>
  );
};

export default Total;
