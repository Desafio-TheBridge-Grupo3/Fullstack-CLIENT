import { useContext } from "react";
import React, { useEffect, useState } from "react";
import { MacroContext } from "../../../../context/MacroContext";
const TRPS = ({ periodo }) => {

  const [precioPotencia, setPrecioPotencia] = useState([])
  const [precioConDescuento, setPrecioConDescuento] = useState([])
  const [totalPagoFactura, setTotalPagoFactura] = useState([])
  const [totalPagoAnual, setTotalPagoAnual] = useState([])



  const {otros, tablaCliente, tablaSeveral, precios, updateTablaSeveral } = useContext(MacroContext);


  //multiplicaciones en cada fila
  useEffect(() => {
    setTotalPagoAnual(tablaCliente.potenciaContratada[periodo] * precioPotencia * 365)
  }, [tablaCliente.potenciaContratada, precioPotencia])

  useEffect(() => {
    setTotalPagoFactura(tablaCliente.potenciaFacturada[periodo] * precioConDescuento * otros.diasFacturacion)
  }, [tablaCliente.potenciaFacturada, precioConDescuento])
 
 
  useEffect(() => {
    const sumar = {
      ...tablaSeveral.totalFacturaP
    }
    sumar[periodo] = totalPagoFactura

    updateTablaSeveral({ ...tablaSeveral, totalFacturaP: sumar })

  }, [totalPagoFactura])


  useEffect(() => {
    const sumar = {
      ...tablaSeveral.totalAnualP
    }
    sumar[periodo] = totalPagoAnual

    updateTablaSeveral({ ...tablaSeveral, totalAnualP: sumar })
  }, [totalPagoAnual])

  return (
    <tr>
      <td className="disabled"><input type="number" placeholder="--" disabled value={tablaCliente.potenciaContratada[periodo]}  /></td>
      <td className="disabled"><input type="number" placeholder="--" disabled value={tablaCliente.potenciaFacturada[periodo]}  /></td>
      <td className="disabled"><input type="number" value={precios.preciosPotencia[periodo]} disabled onChange={(event) => setPrecioPotencia(event.target.value)}/></td>
      <td className="disabled"><input type="number" placeholder="--"  disabled/></td>
      <td className="total"><input type="number" disabled value={precios.preciosPotencia[periodo]} onChange={(event) => setPrecioConDescuento(event.target.value)}/></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura} /></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual} /></td>
    </tr>
  );
};

export default TRPS;
