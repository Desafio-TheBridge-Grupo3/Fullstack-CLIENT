import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { MacroContext } from "../../../../context/MacroContext";
const TRS = ({ periodo }) => {

  const [consumoAnual, setConsumoAnual] = useState([])
  const [consumoActual, setConsumoActual] = useState([])
  const [preciosAnual, setPreciosAnual] = useState([])
  const [preciosFacturacion, setPreciosFacturacion] = useState([])
  const [descuento, setDescuento] = useState([])
  const [precioConDescuento, setPrecioConDescuento] = useState([])
  const [totalPagoFactura, setTotalPagoFactura] = useState([])
  const [totalPagoAnual, setTotalPagoAnual] = useState([])

  const update = (event, setter) => {
    setter(Number(event.target.value))
  }

  const { tablaSeveral, updateTablaSeveral } = useContext(MacroContext);

  //multiplicaciones en fila
  useEffect(() => {
    setTotalPagoAnual(preciosAnual * consumoAnual )
  }, [consumoAnual, preciosAnual])

  useEffect(() => {
    setTotalPagoFactura(consumoActual * precioConDescuento)
  }, [consumoActual, precioConDescuento])


  //sumas en columna
  useEffect(() => {
    const sumar = {
      ...tablaSeveral.consumoAnual
    }
    sumar[periodo] = consumoAnual

    updateTablaSeveral({ ...tablaSeveral, consumoAnual: sumar })
  }, [consumoAnual])


  useEffect(() => {
    const sumar = {
      ...tablaSeveral.consumoActual
    }
    sumar[periodo] = consumoActual

    updateTablaSeveral({ ...tablaSeveral, consumoActual: sumar })
  }, [consumoActual])


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
      <td><input placeholder="--" type="number" value={consumoAnual} onChange={(e) => update(e, setConsumoAnual)} /></td>
      <td><input placeholder="--" type="number" value={consumoActual} onChange={(e) => update(e, setConsumoActual)} /></td>
      <td className="disabled"><input  type="number" value={preciosAnual} disabled /></td>
      <td className="disabled"><input type="number" value={preciosFacturacion} disabled /></td>
      <td className="disabled"><input type="number"  placeholder="--" value={descuento} disabled/></td>
      <td className="total"><input type="number" disabled value={precioConDescuento} /></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura} /></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual} /></td>
    </tr>
  );
};

export default TRS;
