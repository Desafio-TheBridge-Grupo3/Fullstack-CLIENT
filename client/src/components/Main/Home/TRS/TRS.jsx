import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { MacroContext } from "../../../../context/MacroContext";

const TRS = ({ periodo }) => {

  const [preciosAnual, setPreciosAnual] = useState([])
  const [preciosFacturacion, setPreciosFacturacion] = useState([])
  const [precioConDescuento, setPrecioConDescuento] = useState([])
  const [totalPagoFactura, setTotalPagoFactura] = useState([])
  const [totalPagoAnual, setTotalPagoAnual] = useState([])

  const update = (event, setter) => {
    setter(Number(event.target.value))
  }

  const { tablaCliente, tablaSeveral, updateTablaSeveral } = useContext(MacroContext);

  //multiplicaciones en fila
  useEffect(() => {
    setTotalPagoAnual(preciosAnual * tablaCliente.consumoAnual )
  }, [tablaCliente.consumoAnual, preciosAnual])

  useEffect(() => {
    setTotalPagoFactura(tablaCliente.consumoActual * precioConDescuento)
  }, [tablaCliente.consumoActual, precioConDescuento])


  

  useEffect(() => {
    const sumar = {
      ...tablaSeveral.totalFactura
    }
    sumar[periodo] = totalPagoFactura

    updateTablaSeveral({ ...tablaSeveral, totalFactura: sumar })

  }, [totalPagoFactura])


  useEffect(() => {
    const sumar = {
      ...tablaSeveral.totalAnual
    }
    sumar[periodo] = totalPagoAnual

    updateTablaSeveral({ ...tablaSeveral, totalAnual: sumar })
  }, [totalPagoAnual])


  return (
    <tr>
      <td><input placeholder="--" type="number" defaultValue={tablaCliente.consumoAnual[periodo]} /></td>
      <td><input placeholder="--" type="number" defaultValue={tablaCliente.consumoActual[periodo]}  /></td>
      <td className="disabled"><input  type="number" value={preciosAnual} disabled /></td>
      <td className="disabled"><input type="number" value={preciosFacturacion} disabled /></td>
      <td className="disabled"><input type="number"  placeholder="--" disabled/></td>
      <td className="total"><input type="number" disabled value={precioConDescuento} /></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura} /></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual} /></td>
    </tr>
  );
};

export default TRS;
