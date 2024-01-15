import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useDebounce } from "use-debounce";
import { MacroContext } from "../../../../context/MacroContext";


const TRPC = ({periodo}) => {

const [potenciaContratada, setPotenciaContratada] = useState([])
const [potenciaFacturada, setPotenciaFacturada] = useState([])
const [precioPotencia, setPrecioPotencia] = useState([])
const [descuento, setDescuento] = useState([])
const [precioConDescuento, setPrecioConDescuento] = useState([])
const [totalPagoFactura, setTotalPagoFactura] = useState([])
const [totalPagoAnual, setTotalPagoAnual] = useState([])

const [debouncedDescuento] = useDebounce(descuento, 500);

const { tablaCliente, otros, updateTablaCliente } = useContext(MacroContext);


//multiplicaciones en cada fila
useEffect(() => {
  setPrecioConDescuento( precioPotencia - (precioPotencia * (descuento / 100)))
}, [precioPotencia, descuento])

useEffect(() => {
  setTotalPagoFactura(potenciaFacturada *(precioPotencia - (precioPotencia * (descuento / 100))) * otros.diasFacturacion)
  }, [potenciaFacturada, precioPotencia, descuento, otros.diasFacturacion])

useEffect(() => {
  setTotalPagoAnual(potenciaContratada * precioPotencia * 365 )
}, [potenciaContratada, precioPotencia])


// actualizadores del context
useEffect(() => {
  const sumar = {
    ...tablaCliente.totalFacturaP
  }
  sumar[periodo] = totalPagoFactura

  updateTablaCliente({ ...tablaCliente, totalFacturaP: sumar })

}, [totalPagoFactura])


useEffect(() => {
  const sumar = {
    ...tablaCliente.totalAnualP
  }
  sumar[periodo] = totalPagoAnual

  updateTablaCliente({ ...tablaCliente, totalAnualP: sumar })
}, [totalPagoAnual])



  return (
    <tr>
        <td><input type="number"  placeholder="--" value={potenciaContratada} onChange={(e) => setPotenciaContratada(Number(e.target.value))} /></td>
        <td><input type="number" placeholder="--" value={potenciaFacturada} onChange={(e) => setPotenciaFacturada(Number(e.target.value))} /></td>
        <td><input type="number" placeholder="--" value={precioPotencia} onChange={(e) => setPrecioPotencia(Number(e.target.value))} /></td>
        <td><input type="number" placeholder="--" value={descuento} onChange={(e) => setDescuento(Number(e.target.value))} /></td>
        <td className="total"><input type="number" disabled value={precioConDescuento}/></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura}/></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual}/></td>
      </tr>
  );
};

export default TRPC;
