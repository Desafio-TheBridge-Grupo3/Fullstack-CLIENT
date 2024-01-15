import React from "react";


const Form = () => {

  //lógica propuesta: En excel cuando el asesor cambia un valor del form ese el precio cambia y podemos hacer lo mismo y nos ahorramos una parte de código un poco rollo. Como por defecto sí o sí habrá valores en el formulario, se hace la primera llamada al back con esos valores y cada vez que se modifica alguno de los desplegables se hace una nueva llamada. No sé si eso podría saturar el sistema, pero ofreceríamos al cliente un producto mucho más parecido a lo que ya están usando...

  return (

    <form className="options" >

      <article>
        <div className="label">
          <label htmlFor="tipo">Tipo de sistema</label>
        </div>
        <select name="tipo" id="tipo" className="select">
          <option value="P">Península</option>
          <option value="B">Baleares</option>
          <option value="C">Canarias</option>

        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="tarifa">Tarifa</label>
        </div>
        <select name="tarifa" id="tarifa" className="select">
          <option value="2.0TD">2.0TD</option>
          <option value="3.0TD">3.0TD</option>
          <option value="6.1TD">6.1TD</option>
          <option value="6.2TD">6.2TD</option>
        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="cia">CIA</label>
        </div>
        <select name="cia" id="cia" className="select">
          <option value="ACCRIONA">ACCIONA</option>
          <option value="ADI">ADI</option>
          <option value="AEQ">AEQ</option>
          <option value="CANDELA">CANDELA</option>
          <option value="ELEIA">ELEIA</option>
          <option value="ENDESA">ENDESA</option>
          <option value="EVOLVE">EVOLVE</option>
          <option value="FACTOR">FACTOR</option>
          <option value="GANA">GANA</option>
          <option value="IBERDROLA">IBERDROLA</option>
          <option value="IGNIS">IGNIS</option>
          <option value="MAX">MAX</option>
          <option value="NATURGY">NATURGY</option>
          <option value="PLENITUDE">PLENITUDE</option>
          <option value="TOTAL">TOTAL</option>
        </select>
      </article>


      <article>
        <div className="label">
          <label htmlFor="metodo">Método</label>
        </div>
        <select name="metodo" id="metodo" className="select">
          <option value="I">INDEXADO</option>
          <option value="F">FIJO</option>
        </select>
      </article>


      <article>
        <div className="label">
          <label htmlFor="productos">Producto CIA (POT)</label>
        </div>
        <select name="productos" id="productos" className="select">
        <option value="	 CLASICA SNP	">	 CLASICA SNP	 </option>
<option value="	 CLASICA SNP TE3	">	 CLASICA SNP TE3	 </option>
<option value="	2.0<10kW PLAN ESTABLE	">	2.0(menor)10kW PLAN ESTABLE	 </option>
<option value="	2.0<10kW Plan Exclusivo 15%TE/TP 1p	">	2.0(menor)10kW Plan Exclusivo 15%TE/TP 1p	 </option>
<option value="	2.0<10kW Plan Exclusivo 15%TE/TP 3p	">	2.0(menor)10kW Plan Exclusivo 15%TE/TP 3p	 </option>
<option value="	2.0>10kW Plan Estable	">	2.0(mayor)10kW Plan Estable	 </option>
<option value="	2.0>10kW Plan Exclusivo 15%TE/TP 1p	">	2.0(mayor)10kW Plan Exclusivo 15%TE/TP 1p	 </option>
<option value="	2.0>10kW Plan Exclusivo 15%TE/TP 3p	">	2.0(mayor)10kW Plan Exclusivo 15%TE/TP 3p	 </option>
<option value="	2.0>10kW Plan Exclusivo 26/30%TE 1p	">	2.0(mayor)10kW Plan Exclusivo 26/30%TE 1p	 </option>
<option value="	2.0>10kW Plan Exclusivo 26/30%TE 3p	">	2.0(mayor)10kW Plan Exclusivo 26/30%TE 3p	 </option>
<option value="	3.0 Plan Estable	">	3.0 Plan Estable	 </option>
<option value="	3.0 Plan Exclusivo 15%TE	">	3.0 Plan Exclusivo 15%TE	 </option>
<option value="	3.0 Plan Exclusivo 26/30%TE	">	3.0 Plan Exclusivo 26/30%TE	 </option>
<option value="	ADI CLARA	">	ADI CLARA	 </option>
<option value="	ADI CLARA<10KW	">	ADI CLARA(menor)10KW	 </option>
<option value="	ADI SENCILLA	">	ADI SENCILLA	 </option>
<option value="	ALTO	">	ALTO	 </option>
<option value="	AMPERE	">	AMPERE	 </option>
<option value="	ARMONIA	">	ARMONIA	 </option>
<option value="	BALANCE OF ENERGY 0	">	BALANCE OF ENERGY 0	 </option>
<option value="	BALANCE OF ENERGY 1	">	BALANCE OF ENERGY 1	 </option>
<option value="	BALANCE OF ENERGY 2	">	BALANCE OF ENERGY 2	 </option>
<option value="	BALANCE OF ENERGY 3	">	BALANCE OF ENERGY 3	 </option>
<option value="	BASIC	">	BASIC	 </option>
<option value="	CIERZO	">	CIERZO	 </option>
<option value="	CLASICA	">	CLASICA	 </option>
<option value="	CLASICA ETOP	">	CLASICA ETOP	 </option>
<option value="	CLASICA ETOP UNICA	">	CLASICA ETOP UNICA	 </option>
<option value="	CLASICA LIBRE >100001	">	CLASICA LIBRE (mayor)100001	 </option>
<option value="	CLASICA LIBRE >50.001	">	CLASICA LIBRE (mayor)50.001	 </option>
<option value="	CLASICA LIBRE >5001	">	CLASICA LIBRE (mayor)5001	 </option>
<option value="	CLASICA LIBRE 0-10000	">	CLASICA LIBRE 0-10000	 </option>
<option value="	CLASICA LIBRE 0-1500	">	CLASICA LIBRE 0-1500	 </option>
<option value="	CLASICA LIBRE 0-50.000	">	CLASICA LIBRE 0-50.000	 </option>
<option value="	CLASICA LIBRE 10001-30000	">	CLASICA LIBRE 10001-30000	 </option>
<option value="	CLASICA LIBRE 1501-3000	">	CLASICA LIBRE 1501-3000	 </option>
<option value="	CLASICA LIBRE 30001-50000	">	CLASICA LIBRE 30001-50000	 </option>
<option value="	CLASICA LIBRE 3001-5000	">	CLASICA LIBRE 3001-5000	 </option>
<option value="	CLASICA LIBRE 50001-100000	">	CLASICA LIBRE 50001-100000	 </option>
<option value="	CLASICA LIBRE UNICA >100001	">	CLASICA LIBRE UNICA (mayor)100001	 </option>
<option value="	CLASICA LIBRE UNICA >50.001	">	CLASICA LIBRE UNICA (mayor)50.001	 </option>
<option value="	CLASICA LIBRE UNICA >5001	">	CLASICA LIBRE UNICA (mayor)5001	 </option>
<option value="	CLASICA LIBRE UNICA 0-10000	">	CLASICA LIBRE UNICA 0-10000	 </option>
<option value="	CLASICA LIBRE UNICA 0-1500	">	CLASICA LIBRE UNICA 0-1500	 </option>
<option value="	CLASICA LIBRE UNICA 0-50.000	">	CLASICA LIBRE UNICA 0-50.000	 </option>
<option value="	CLASICA LIBRE UNICA 10001-30000	">	CLASICA LIBRE UNICA 10001-30000	 </option>
<option value="	CLASICA LIBRE UNICA 1501-3000	">	CLASICA LIBRE UNICA 1501-3000	 </option>
<option value="	CLASICA LIBRE UNICA 30001-50000	">	CLASICA LIBRE UNICA 30001-50000	 </option>
<option value="	CLASICA LIBRE UNICA 3001-5000	">	CLASICA LIBRE UNICA 3001-5000	 </option>
<option value="	CLASICA LIBRE UNICA 50001-100000	">	CLASICA LIBRE UNICA 50001-100000	 </option>
<option value="	CLASICA TE1	">	CLASICA TE1	 </option>
<option value="	CLASICA TE1 UNICA	">	CLASICA TE1 UNICA	 </option>
<option value="	CLASICA TE2	">	CLASICA TE2	 </option>
<option value="	CLASICA TE2 UNICA	">	CLASICA TE2 UNICA	 </option>
<option value="	CLASICA TE3	">	CLASICA TE3	 </option>
<option value="	CLASICA TE3 UNICA	">	CLASICA TE3 UNICA	 </option>
<option value="	CLASICA TE4	">	CLASICA TE4	 </option>
<option value="	CLASICA TE4 UNICA	">	CLASICA TE4 UNICA	 </option>
<option value="	CLASICA TE5	">	CLASICA TE5	 </option>
<option value="	CLASICA TE5 UNICA	">	CLASICA TE5 UNICA	 </option>
<option value="	DOMESTICO_EXTRA1P	">	DOMESTICO_EXTRA1P	 </option>
<option value="	DOMESTICO_EXTRA3P	">	DOMESTICO_EXTRA3P	 </option>
<option value="	DOMESTICO_MINI	">	DOMESTICO_MINI	 </option>
<option value="	DOMESTICO_POOLDBOE	">	DOMESTICO_POOLDBOE	 </option>
<option value="	DOMESTICO_POOLDEXTRA	">	DOMESTICO_POOLDEXTRA	 </option>
<option value="	DOMESTICO_Precio WEB3P	">	DOMESTICO_Precio WEB3P	 </option>
<option value="	DOMESTICO_PRIME	">	DOMESTICO_PRIME	 </option>
<option value="	ECO ADI	">	ECO ADI	 </option>
<option value="	EQUILIBRIO	">	EQUILIBRIO	 </option>
<option value="	EXCELLENT	">	EXCELLENT	 </option>
<option value="	EXCELLENT+	">	EXCELLENT+	 </option>
<option value="	EXCELLENT+ 1P	">	EXCELLENT+ 1P	 </option>
<option value="	EXCELLENT+ 3P	">	EXCELLENT+ 3P	 </option>
<option value="	FACIL MILAN	">	FACIL MILAN	 </option>
<option value="	FACIL NAPOLES 	">	FACIL NAPOLES 	 </option>
<option value="	FACIL ROMA 	">	FACIL ROMA 	 </option>
<option value="	FACIL VENECIA	">	FACIL VENECIA	 </option>
<option value="	FARAD	">	FARAD	 </option>
<option value="	GOLD	">	GOLD	 </option>
<option value="	HENRY	">	HENRY	 </option>
<option value="	HOLALUZ INDEXADO	">	HOLALUZ INDEXADO	 </option>
<option value="	LEVANTE	">	LEVANTE	 </option>
<option value="	LEVANTE+	">	LEVANTE+	 </option>
<option value="	LOVE PLANA 24H	">	LOVE PLANA 24H	 </option>
<option value="	LOW	">	LOW	 </option>
<option value="	LOW GREEN	">	LOW GREEN	 </option>
<option value="	LUMEN	">	LUMEN	 </option>
<option value="	LUX	">	LUX	 </option>
<option value="	MARE KIT 1	">	MARE KIT 1	 </option>
<option value="	MARE KIT 2	">	MARE KIT 2	 </option>
<option value="	MARE KIT 3	">	MARE KIT 3	 </option>
<option value="	MARE PLUS 1	">	MARE PLUS 1	 </option>
<option value="	MARE PLUS 2	">	MARE PLUS 2	 </option>
<option value="	MARE PLUS 3	">	MARE PLUS 3	 </option>
<option value="	MARE ZEN 1	">	MARE ZEN 1	 </option>
<option value="	MARE ZEN 2	">	MARE ZEN 2	 </option>
<option value="	MARE ZEN 3	">	MARE ZEN 3	 </option>
<option value="	MAX	">	MAX	 </option>
<option value="	MAX GREEN	">	MAX GREEN	 </option>
<option value="	MAYOR A	">	MAYOR A	 </option>
<option value="	MAYOR B	">	MAYOR B	 </option>
<option value="	MAYOR C	">	MAYOR C	 </option>
<option value="	MEDIUM GREEN	">	MEDIUM GREEN	 </option>
<option value="	MILAN	">	MILAN	 </option>
<option value="	NAPOLES	">	NAPOLES	 </option>
<option value="	NEGOCIO_AHORRO	">	NEGOCIO_AHORRO	 </option>
<option value="	NEGOCIO_AHORRO1P	">	NEGOCIO_AHORRO1P	 </option>
<option value="	NEGOCIO_EXTRA	">	NEGOCIO_EXTRA	 </option>
<option value="	NEGOCIO_EXTRA1P	">	NEGOCIO_EXTRA1P	 </option>
<option value="	NEGOCIO_EXTRAPLUS	">	NEGOCIO_EXTRAPLUS	 </option>
<option value="	NEGOCIO_EXTRAPLUS1P	">	NEGOCIO_EXTRAPLUS1P	 </option>
<option value="	NEGOCIO_EXTRATOP	">	NEGOCIO_EXTRATOP	 </option>
<option value="	NEGOCIO_EXTRATOP1P	">	NEGOCIO_EXTRATOP1P	 </option>
<option value="	NEGOCIO_MINI1P	">	NEGOCIO_MINI1P	 </option>
<option value="	NEGOCIO_POOLNAHORRO	">	NEGOCIO_POOLNAHORRO	 </option>
<option value="	NEGOCIO_POOLNEXTRA	">	NEGOCIO_POOLNEXTRA	 </option>
<option value="	NEGOCIO_POOLNPLUS	">	NEGOCIO_POOLNPLUS	 </option>
<option value="	NEGOCIO_POOLNPROF	">	NEGOCIO_POOLNPROF	 </option>
<option value="	NEGOCIO_POOLSUMMER	">	NEGOCIO_POOLSUMMER	 </option>
<option value="	NEGOCIO_PROFESIONAL	">	NEGOCIO_PROFESIONAL	 </option>
<option value="	NEGOCIO_PROFESIONAL1P	">	NEGOCIO_PROFESIONAL1P	 </option>
<option value="	NULL	">	NULL	 </option>
<option value="	ONLINE TG	">	ONLINE TG	 </option>
<option value="	PEH/API 2.0<10kW PLAN ESTABLE	">	PEH/API 2.0(menor)10kW PLAN ESTABLE	 </option>
<option value="	PEH/API 2.0<10kW Plan Exclusivo 15%TE/TP 1p	">	PEH/API 2.0(menor)10kW Plan Exclusivo 15%TE/TP 1p	 </option>
<option value="	PEH/API 2.0<10kW Plan Exclusivo 15%TE/TP 3p	">	PEH/API 2.0(menor)10kW Plan Exclusivo 15%TE/TP 3p	 </option>
<option value="	PEH/API 2.0>10kW Plan Estable	">	PEH/API 2.0(mayor)10kW Plan Estable	 </option>
<option value="	PEH/API 2.0>10kW Plan Exclusivo 15%TE/TP 1p	">	PEH/API 2.0(mayor)10kW Plan Exclusivo 15%TE/TP 1p	 </option>
<option value="	PEH/API 2.0>10kW Plan Exclusivo 15%TE/TP 3p	">	PEH/API 2.0(mayor)10kW Plan Exclusivo 15%TE/TP 3p	 </option>
<option value="	PEH/API 3.0 Plan Estable	">	PEH/API 3.0 Plan Estable	 </option>
<option value="	PLAN FIJO LUZ 3.0	">	PLAN FIJO LUZ 3.0	 </option>
<option value="	PLAN FIJO LUZ 3.0 ONE	">	PLAN FIJO LUZ 3.0 ONE	 </option>
<option value="	PLAN FIJO LUZ 3.0 SUPRA	">	PLAN FIJO LUZ 3.0 SUPRA	 </option>
<option value="	PLAN FIJO LUZ 6.1	">	PLAN FIJO LUZ 6.1	 </option>
<option value="	PLAN FIJO LUZ 6.1 ONE	">	PLAN FIJO LUZ 6.1 ONE	 </option>
<option value="	PLAN FIJO LUZ 6.1 SUPRA	">	PLAN FIJO LUZ 6.1 SUPRA	 </option>
<option value="	PLANA 24H	">	PLANA 24H	 </option>
<option value="	PONIENTE	">	PONIENTE	 </option>
<option value="	PONIENTE+	">	PONIENTE+	 </option>
<option value="	PRECIO ESTABLE TG	">	PRECIO ESTABLE TG	 </option>
<option value="	PREMIUM	">	PREMIUM	 </option>
<option value="	PROFESIONAL	">	PROFESIONAL	 </option>
<option value="	RESIDENCIAL ESPECIAL	">	RESIDENCIAL ESPECIAL	 </option>
<option value="	RESIDENCIAL NOCHE LUZ	">	RESIDENCIAL NOCHE LUZ	 </option>
<option value="	RESIDENCIAL POR USO LUZ	">	RESIDENCIAL POR USO LUZ	 </option>
<option value="	RESIDENCIAL POR USO LUZ LOYAL	">	RESIDENCIAL POR USO LUZ LOYAL	 </option>
<option value="	RESIDENCIAL PROMOCIONAL SVE	">	RESIDENCIAL PROMOCIONAL SVE	 </option>
<option value="	ROMA	">	ROMA	 </option>
<option value="	SILVER	">	SILVER	 </option>
<option value="	SIMETRIA	">	SIMETRIA	 </option>
<option value="	SIMPLEX	">	SIMPLEX	 </option>
<option value="	SIN MAS	">	SIN MAS	 </option>
<option value="	SMAX	">	SMAX	 </option>
<option value="	SMAX GREEN	">	SMAX GREEN	 </option>
<option value="	TARIFA 24 HORAS	">	TARIFA 24 HORAS	 </option>
<option value="	TARIFA TRAMOS HORARIOS	">	TARIFA TRAMOS HORARIOS	 </option>
<option value="	TEMPO 3 PERIODOS	">	TEMPO 3 PERIODOS	 </option>
<option value="	TEMPO HAPPY	">	TEMPO HAPPY	 </option>
<option value="	TEMPO LIBRE	">	TEMPO LIBRE	 </option>
<option value="	TEMPO OPEN	">	TEMPO OPEN	 </option>
<option value="	TEMPO OPEN >100kW	">	TEMPO OPEN (mayor)100kW	 </option>
<option value="	TEMPO OPEN 15â‰¤30kW	">	TEMPO OPEN 15â‰¤30kW	 </option>
<option value="	TEMPO OPEN 30â‰¤50kW	">	TEMPO OPEN 30â‰¤50kW	 </option>
<option value="	TEMPO OPEN 50â‰¤100kW	">	TEMPO OPEN 50â‰¤100kW	 </option>
<option value="	TRAMONTANA	">	TRAMONTANA	 </option>
<option value="	TRAMONTANA+	">	TRAMONTANA+	 </option>
<option value="	TRES PRECIOS CLASICO	">	TRES PRECIOS CLASICO	 </option>
<option value="	TU DECIDES 0	">	TU DECIDES 0	 </option>
<option value="	TU DECIDES 1	">	TU DECIDES 1	 </option>
<option value="	TU DECIDES 2	">	TU DECIDES 2	 </option>
<option value="	TU DECIDES 3	">	TU DECIDES 3	 </option>
<option value="	TU ELIGES 0	">	TU ELIGES 0	 </option>
<option value="	TU ELIGES 1	">	TU ELIGES 1	 </option>
<option value="	TU ELIGES 2	">	TU ELIGES 2	 </option>
<option value="	TU ELIGES 3	">	TU ELIGES 3	 </option>
<option value="	TU MEDIOAMBIENTE 0	">	TU MEDIOAMBIENTE 0	 </option>
<option value="	TU MEDIOAMBIENTE 1	">	TU MEDIOAMBIENTE 1	 </option>
<option value="	TU MEDIOAMBIENTE 2	">	TU MEDIOAMBIENTE 2	 </option>
<option value="	TU MEDIOAMBIENTE 3	">	TU MEDIOAMBIENTE 3	 </option>
<option value="	UN PRECIO CLASICO	">	UN PRECIO CLASICO	 </option>
<option value="	VENECIA	">	VENECIA	 </option>


        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="mes">Mes de Facturación (Indexado)</label>
        </div>
        <select name="mes" id="mes" className="select">
          <option value="01/01/2023">01/01/2023</option>
          <option value="01/02/2023">01/02/2023</option>
          <option value="01/03/2023">01/03/2023</option>
          <option value="01/04/2023">01/04/2023</option>
          <option value="01/05/2023">01/05/2023</option>
          <option value="01/06/2023">01/06/2023</option>
          <option value="01/07/2023">01/07/2023</option>
          <option value="01/08/2023">01/08/2023</option>
          <option value="01/09/2023">01/09/2023</option>
          <option value="01/10/2023">01/10/2023</option>
          <option value="01/11/2023">01/11/2023</option>
          <option value="01/12/2023">01/12/2023</option>

        </select>
      </article>

      <article>
        <div className="label">
          <label htmlFor="fee">FEE (Energía)</label>
        </div>
        <select name="fee" id="fee" className="select">
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


    </form>
  )
};

export default Form;