import React from "react";

const SPotencia = () => {
  return (
    <>
      <section className="propenpt">
        <h2>Potencia</h2>
        <table className="subtablas">
          <thead>
            <tr>
              <th className="th1">Potencia Contratada (kW)</th>
              <th className="th1">Potencia Facturada (kW)
              </th>
              <th className="th1">Precios potencia (€/kWh/dia)
              </th>
              <th className="th1">Descuento</th>
              <th className="th1">Precio con Descuento</th>
              <th className="th1">Total Pago en Factura
              </th>
              <th className="th1">Total Pago Anual
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="total"></td>
              <td className="total"></td>
              <td className="total"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="total"></td>
              <td className="total"></td>
              <td className="total"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="total"></td>
              <td className="total"></td>
              <td className="total"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="total"></td>
              <td className="total"></td>
              <td className="total"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="total"></td>
              <td className="total"></td>
              <td className="total"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="total"></td>
              <td className="total"></td>
              <td className="total"></td>
            </tr>

          </tbody>
          <tfoot>
            <tr>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="total"></td>
              <td className="total"></td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
};

export default SPotencia;
