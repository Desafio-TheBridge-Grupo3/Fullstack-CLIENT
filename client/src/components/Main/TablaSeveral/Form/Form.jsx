import React from "react";
import { useForm } from "react-hook-form"


const Form = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (

    <form className="options" onSubmit={handleSubmit(onSubmit)}>

      <article>
        <div className="label">
          <label htmlFor="tipo">Tipo de sistema</label>
        </div>
        <select name="tipo" id="tipo" className="select">
          <option value="null"></option>
          <option value="peninsula">Península</option>
          <option value="baleares">Baleares</option>
          <option value="canarias">Canarias</option>

        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="tarifa">Tipo de sistema</label>
        </div>
        <select name="tarifa" id="tarifa" className="select">
        <option value="null"></option>
          <option value="20">2.0TD</option>
          <option value="30">3.0TD</option>
          <option value="61">6.1TD</option>
          <option value="62">6.2TD</option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="cia">Tipo de sistema</label>
        </div>
        <select name="cia" id="cia" className="select">
        <option value="null"></option>
          <option value="acciona">ACCIONA</option>
          <option value="adi">ADI</option>
          <option value="aeq">AEQ</option>
          <option value="candela">CANDELA</option>
          <option value="eleia">ELEIA</option>
          <option value="endesa">ENDESA</option>
          <option value="evolve">EVOLVE</option>
          <option value="factor">FACTOR</option>
          <option value="gana">GANA</option>
          <option value="iberdrola">IBERDROLA</option>
          <option value="ignis">IGNIS</option>
          <option value="max">MAX</option>
          <option value="naturgy">NATURGY</option>
          <option value="plenitude">PLENITUDE</option>
          <option value="total">TOTAL</option>
        </select>
      </article>


      <article>
        <div className="label">
          <label htmlFor="metodo">Tipo de sistema</label>
        </div>
        <select name="metodo" id="metodo" className="select">
        <option value="null"></option>
          <option value="indexado">INDEXADO</option>
          <option value="fijo">FIJO</option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="productos">Producto CIA (POT)</label>
        </div>
        <select name="productos" id="productos" className="select">
        <option value="null"></option>
          <option value="armonia">ARMONÍA</option>
          <option value="equilibrio">EQUILIBRIO</option>
          <option value="simetria">SIMETRÍA</option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="mes">Tipo de sistema</label>
        </div>
        <select name="mes" id="mes" className="select">
        <option value="null"></option>
          <option value="en">Enero</option>
          <option value="feb">Febrero</option>
          <option value="mar">Marzo</option>
          <option value="abr">Abril</option>
          <option value="may">Mayo</option>
          <option value="jun">Junio</option>
          <option value="jul">Julio</option>
          <option value="ago">Agosto</option>
          <option value="sep">Septiembre</option>
          <option value="oct">Octubre</option>
          <option value="nov">Noviembre</option>
          <option value="dic">Diciembre</option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="fee">Tipo de sistema</label>
        </div>
        <select name="fee" id="fee" className="select">
        <option value="null"></option>
        <option value="1.5">1.5 %</option>
        <option value="3">3 %</option>
        <option value="4">4 %</option>
        <option value="5">5 %</option>
        <option value="6">6 %</option>
        <option value="8">8 %</option>
        <option value="10">10 %</option>
        <option value="15">15 %</option>
        <option value="20">20 %</option>
        <option value="25">25 %</option>
        <option value="30">30 %</option>
        </select>
      </article>

      <button type="submit">Valorar propuesta</button>
    </form>
  )
};

export default Form;