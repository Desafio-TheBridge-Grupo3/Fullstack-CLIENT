import React from "react";
import { useContext } from "react";
import TRS from "../../TRS/TRS";
import { MacroContext } from "../../../../../context/MacroContext";
const SEnergia = () => {

  const { tablaSeveral} = useContext(MacroContext);

  return (
    <>
    <section id="propEnergia">
      <h2>Energía</h2>
      <table className="subtablas">
      <thead>
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
        </thead>
        <tbody>
        <TRS periodo={"P1"}/>
        <TRS periodo={"P2"}/>
        <TRS periodo={"P3"}/>
        <TRS periodo={"P4"}/>
        <TRS periodo={"P5"}/>
        <TRS periodo={"P6"}/>
        </tbody>
        <tfoot>
        <tr>
          <td className="total"><input type="number" disabled value={Object.values(tablaSeveral.consumoAnual).reduce((a,b) => a+b)}/></td>
          <td className="total"><input type="number" disabled value={Object.values(tablaSeveral.consumoActual).reduce((a,b) => a+b)}/></td>
          <td className="hidden"></td>
          <td className="hidden"></td>
          <td className="hidden"></td>
          <td className="hidden"></td>
          <td className="total"><input type="number" disabled value={Object.values(tablaSeveral.totalFactura).reduce((a,b) => a+b)}/></td>
          <td className="total"><input type="number" disabled value={Object.values(tablaSeveral.totalAnual).reduce((a,b) => a+b)}/></td>
        </tr>
        </tfoot>
      </table>
      </section>
    </>
  );
};

export default SEnergia;
