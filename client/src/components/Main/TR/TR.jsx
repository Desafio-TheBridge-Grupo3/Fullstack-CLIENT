import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { EnergiaContext } from "../../../context/EnergiaContext";

const TR = ({ periodo }) => {

  const [consumoAnual, setConsumoAnual] = useState(null)
  const [consumoActual, setConsumoActual] = useState(null)
  const [preciosAnual, setPreciosAnual] = useState(null)
  const [preciosFacturacion, setPreciosFacturacion] = useState(null)
  const [descuento, setDescuento] = useState(null)
  const [precioConDescuento, setPrecioConDescuento] = useState(null)
  const [totalPagoFactura, setTotalPagoFactura] = useState(null)
  const [totalPagoAnual, setTotalPagoAnual] = useState(null)


  const update = (event, setter) => {
    setter(Number(event.target.value))
  }

  const { totalesEnergia, updateTotalesEnergia } = useContext(EnergiaContext);



  useEffect(() => {
    setPrecioConDescuento(preciosFacturacion - (preciosFacturacion * (descuento / 100)))
  }, [preciosFacturacion, descuento])

  useEffect(() => {
    setTotalPagoFactura(consumoActual * preciosFacturacion * (1 - descuento / 100))
  }, [consumoActual, preciosFacturacion, descuento])

  useEffect(() => {
    setTotalPagoAnual(preciosAnual * consumoAnual * (1 - descuento / 100))
  }, [consumoAnual, preciosAnual, descuento])




  useEffect(() => {
    const sumar = {
      ...totalesEnergia.consumoAnual
    }
    sumar[periodo] = consumoAnual

    updateTotalesEnergia({ ...totalesEnergia, consumoAnual: sumar })
  }, [consumoAnual])


  useEffect(() => {
    const sumar = {
      ...totalesEnergia.consumoActual
    }
    sumar[periodo] = consumoActual

    updateTotalesEnergia({ ...totalesEnergia, consumoActual: sumar })
  }, [consumoActual])


  useEffect(() => {
    const sumar = {
      ...totalesEnergia.totalFactura
    }
    sumar[periodo] = totalPagoFactura

    updateTotalesEnergia({ ...totalesEnergia, totalFactura: sumar })

  }, [totalPagoFactura])


  useEffect(() => {
    const sumar = {
      ...totalesEnergia.totalAnual
    }
    sumar[periodo] = totalPagoAnual

    updateTotalesEnergia({ ...totalesEnergia, totalAnual: sumar })
  }, [totalPagoAnual])




  return (
    <tr>
      <td><input placeholder="0" type="number" value={consumoAnual} onBlur={(e) => update(e, setConsumoAnual)} /></td>
      <td><input placeholder="0" type="number" value={consumoActual} onBlur={(e) => update(e, setConsumoActual)} /></td>
      <td><input placeholder="0" type="number" value={preciosAnual} onBlur={(e) => update(e, setPreciosAnual)} /></td>
      <td><input placeholder="0" type="number" value={preciosFacturacion} onBlur={(e) => update(e, setPreciosFacturacion)} /></td>
      <td><input placeholder="0" type="number" value={descuento} onBlur={(e) => update(e, setDescuento)} /></td>
      <td className="total"><input type="number" disabled value={precioConDescuento}/></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura}/></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual}/></td>
    </tr>
  );
};

export default TR;
