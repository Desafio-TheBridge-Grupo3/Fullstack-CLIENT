import React from "react";
import { useForm } from "react-hook-form"


const Energia = () => {
  return (
    <>
    <section className="enpt">
      <h2>Energía</h2>
      <table className="subtablas">
        <tr>
          <th className="th1">Consumo anual (kWh)</th>
          <th className="th1">Consumo factura actual (kWh)
          </th>
          <th className="th1">Precio energía activa media anual facturación (€/kWh)
          </th>
          <th className="th1">Precio energía activa mes de facturación (€/kWh)
          </th>
          <th className="th1">Descuento</th>
          <th className="th1">Precio con descuento
          </th>
          <th className="th1">Total pago en factura
          </th>
          <th className="th1">Total pago anual
          </th>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
        </tr>
        <tr>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="hidden"><input type="text" /></td>
          <td className="hidden"><input type="text" /></td>
          <td className="hidden"><input type="text" /></td>
          <td className="hidden"><input type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
          <td className="total"><input className="total" type="text" /></td>
        </tr>
      </table>
      </section>
    </>
  );
};

export default Energia;
