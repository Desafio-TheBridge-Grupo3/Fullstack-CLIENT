import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { useDebounce } from "use-debounce";
import { MacroContext } from "../../../../context/MacroContext";

const TR = ({ periodo }) => {

  const [consumoAnual, setConsumoAnual] = useState(0)
  const [consumoActual, setConsumoActual] = useState(0)
  const [preciosAnual, setPreciosAnual] = useState(0)
  const [preciosFacturacion, setPreciosFacturacion] = useState(0)
  const [descuento, setDescuento] = useState(0)
  const [precioConDescuento, setPrecioConDescuento] = useState(0)
  const [totalPagoFactura, setTotalPagoFactura] = useState(0)
  const [totalPagoAnual, setTotalPagoAnual] = useState(0)

  const [debouncedDescuento] = useDebounce(descuento, 500);

  const update = (event, setter) => {
    setter(Number(event.target.value))
  }

  const { tablaCliente, updateTablaCliente } = useContext(MacroContext);

  //multiplicaciones en fila
  useEffect(() => {
    setPrecioConDescuento(preciosFacturacion - (preciosFacturacion * (descuento / 100)))
  }, [preciosFacturacion, descuento])


  useEffect(() => {
    setTotalPagoAnual(preciosAnual * consumoAnual * (1 - descuento / 100))
  }, [consumoAnual, preciosAnual, descuento])

  useEffect(() => {
    setTotalPagoFactura(consumoActual*precioConDescuento)
  }, [consumoActual, precioConDescuento])



//sumas en columna
  useEffect(() => {
    const sumar = {
      ...tablaCliente.consumoAnual
    }
    sumar[periodo] = consumoAnual

    updateTablaCliente({ ...tablaCliente, consumoAnual: sumar })
  }, [consumoAnual])


  useEffect(() => {
    const sumar = {
      ...tablaCliente.consumoActual
    }
    sumar[periodo] = consumoActual

    updateTablaCliente({ ...tablaCliente, consumoActual: sumar })
  }, [consumoActual])


  useEffect(() => {
    const sumar = {
      ...tablaCliente.totalFactura
    }
    sumar[periodo] = totalPagoFactura

    updateTablaCliente({ ...tablaCliente, totalFactura: sumar })

  }, [totalPagoFactura, descuento])


  useEffect(() => {
    const sumar = {
      ...tablaCliente.totalAnual
    }
    sumar[periodo] = totalPagoAnual

    updateTablaCliente({ ...tablaCliente, totalAnual: sumar })
  }, [totalPagoAnual, debouncedDescuento])




  return (
    <tr>
      <td><input placeholder="--" type="number" value={consumoAnual} onChange={(e) => update(e, setConsumoAnual)} /></td>
      <td><input placeholder="--" type="number" value={consumoActual} onChange={(e) => update(e, setConsumoActual)} /></td>
      <td><input placeholder="--" type="number" value={preciosAnual} onChange={(e) => update(e, setPreciosAnual)} /></td>
      <td><input placeholder="--" type="number" value={preciosFacturacion} onChange={(e) => update(e, setPreciosFacturacion)} /></td>
      <td><input placeholder="--" type="number" value={descuento} onChange={(e) => update(e, setDescuento)} /></td>
      <td className="total"><input type="number" disabled value={precioConDescuento}/></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura}/></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual}/></td>
    </tr>
  );
};

export default TR;
