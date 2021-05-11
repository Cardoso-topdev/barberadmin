import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

const Overview = () => {
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
  const hoy = `${mes}/${fecha.getDate()}/${fecha.getFullYear()}`;
 
  const [ingresos, setIngresos] = useState(0);
  const [salidas, setSalidas] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getRegistros = async () => {
      const { data } = await axios.post(`https://ajbarbershop.herokuapp.com/ingresos`, {
        hoy,
      });

      if (data[0].ingresos !== null) {
        setIngresos(data[0].ingresos);
      }

      const salidas = await axios.post(`https://ajbarbershop.herokuapp.com/salidas/total`, {
        hoy,
      });
      if (salidas.data[0].salidas !== null) {
        setSalidas(salidas.data[0].salidas);
        
      }

      if(ingresos !== null && salidas !== null){
        const subtotal = data[0].ingresos - salidas.data[0].salidas;
        setTotal(subtotal);
       
      }

    };

    getRegistros();
  }, []);

  return (
    <Fragment>
      <div className="contenedor-nav">
        <Navbar />
      </div>

      <div className="container d-flex align-items-center flex-column">
        <h1 className="titulos mt-5">AJ BarberShop </h1>
        <h3 className="titulos mt-3">Overview</h3>

        <div className="card">
          <h3 className="titulos">Total del dia</h3>
          <p>$ {total}</p>
        </div>
        <div className="card">
          <h3 className="titulos">Ingresos totales</h3>
          <p>$ {ingresos}</p>
        </div>
        <div className="card">
          <h3 className="titulos">Salidas totales</h3>
          <p>$ {salidas}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Overview;
