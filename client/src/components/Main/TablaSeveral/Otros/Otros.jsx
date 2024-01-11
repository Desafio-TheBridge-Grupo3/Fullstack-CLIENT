import React from "react";
import { useForm } from "react-hook-form"

const Otros = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return(
    <>
    <article className="otros">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
     <label htmlFor="impuesto">Impuesto eléctrico</label>
     </div>
     <input type="text" name="impuesto" placeholder="texto"/>

     <div>
     <label htmlFor="otros">Otros conceptos</label>
     </div>
     <input type="text" name="otros" placeholder="texto"/>

     <div>
     <label htmlFor="otrosAnual">Otros conceptos anual</label>
     </div>
     <input type="text" name="otrosAnual" placeholder="texto"/>

      
    </form>
    </article>
    </>
  );
};

export default Otros;
