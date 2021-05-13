import React from "react";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import History from "../components/History";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

function HistorialVentas() {
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
  const hoy = `${fecha.getFullYear()}/${mes}/${fecha.getDate()}`;
  console.log(hoy);

  const [service, setService] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const { data } = await axios.post("https://ajbarbershop.herokuapp.com/registros", {hoy});
      setService(data[0]);
      
    };

    consultarAPI();
  }, []);

  return (
    <Fragment>
      <div className="contenedor-nav">
        <Navbar />
      </div>
      <div className="container d-flex flex-column">
        <h1 className="titulos mt-5">AJ BarberShop</h1>
        <h3 className="titulos mt-3 mb-4">HistorialVentas</h3>
        <p>Ventas del dia: {service.length}</p>
        <div className="row flex-column align-items-center">
        {service.length !== 0? <History service={service}/>: <p>No hay ventas todavia</p>} 
        </div>
      </div>
    </Fragment>
  );
}

export default HistorialVentas;
