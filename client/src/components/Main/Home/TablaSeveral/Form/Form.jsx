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
          <option value=""></option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="tarifa">Tipo de sistema</label>
        </div>
        <select name="tarifa" id="tarifa" className="select">
          <option value=""></option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="cia">Tipo de sistema</label>
        </div>
        <select name="cia" id="cia" className="select">
          <option value=""></option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="cia">Tipo de sistema</label>
        </div>
        <select name="cia" id="cia" className="select">
          <option value=""></option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="metodo">Tipo de sistema</label>
        </div>
        <select name="metodo" id="metodo" className="select">
          <option value=""></option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="productos">Tipo de sistema</label>
        </div>
        <select name="productos" id="productos" className="select">
          <option value=""></option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="mes">Tipo de sistema</label>
        </div>
        <select name="mes" id="mes" className="select">
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
          <option value=""></option>
        </select>
      </article>

      <button type="submit">Valorar propuesta</button>
    </form>
  )
};

export default Form;