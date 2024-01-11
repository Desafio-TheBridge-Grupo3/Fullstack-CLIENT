import React from "react";


const Potencia = () => {
  return (
    <> 
    <section className="enpt">
      <h2>Potencia</h2>
    <table className="subtablas">
      <tr>
        <th className="th1">Potencia facturada (kW)
</th>
        <th className="th1">Precios potencia (€/kWh/dia)
</th>
        <th className="th1">Descuento</th>
        <th className="th1">Precio con descuento</th>
        <th className="th1">Total pago en factura
</th>
        <th className="th1">Total pago anual
</th>
      </tr>
      <tr>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td className="total"></td>
        <td className="total"></td>
        <td className="total"></td>
      </tr>
      <tr>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td className="total"></td>
        <td className="total"></td>
        <td className="total"></td>
      </tr>
      <tr>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td className="total"></td>
        <td className="total"></td>
        <td className="total"></td>
      </tr>
      <tr>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td className="total"></td>
        <td className="total"></td>
        <td className="total"></td>
      </tr>
      <tr>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td className="total"></td>
        <td className="total"></td>
        <td className="total"></td>
      </tr>
      <tr>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td><input type="number" /></td>
        <td className="total"></td>
        <td className="total"></td>
        <td className="total"></td>
      </tr>
      <tr>
        <td className="hidden"></td>
        <td className="hidden"></td>
        <td className="hidden"></td>
        <td className="hidden"></td>
        <td className="total"></td>
        <td className="total"></td>
      </tr>
    </table>
    </section>
    </>
  )
};

export default Potencia;
