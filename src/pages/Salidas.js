import React, { useState } from "react";
import { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

function Salidas() {
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
  const hoy = `${mes}/${fecha.getDate()}/${fecha.getFullYear()}`;

  const [salida, setSalida] = useState([]);


  const actualizarState = (e) => {
    setSalida({
      ...salida,
      [e.target.name]: e.target.value,
      fecha: hoy
    });
  };

  const history = useHistory();

  const crearSalida = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("https://ajbarbershop.herokuapp.com/salidas", salida);
    console.log(data);
    history.push("/overview");
  };

  return (
    <Fragment>
      <div className="contenedor-nav">
        <Navbar />
      </div>
      <div className="container d-flex align-items-center flex-column">
        <h1 className="titulos mt-5">AJ BarberShop </h1>
        <h3 className="titulos mt-3">Registrar Salida</h3>

        <div className="contenedor nuevo-servicio mt-5">
          <form className="form-nuevo" onSubmit={crearSalida}>
            <input
              type="text"
              placeholder="Nombre del movimiento"
              name="nombre"
              id="nombre"
              onChange={actualizarState}
            ></input>
            <input
              type="text"
              placeholder="Descripcion"
              name="descripcion"
              id="descripcion"
              onChange={actualizarState}
            ></input>
            <input
              type="number"
              placeholder="Cantidad a retirar"
              name="costo"
              id="costo"
              onChange={actualizarState}
            ></input>
            {/**/}
            <input
              className="btn btn-nuevo mt-3"
              type="submit"
              value="Registrar salida"
            ></input>
            <Link className="btn btn-nuevo" to="/">
              Regresar
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Salidas;
