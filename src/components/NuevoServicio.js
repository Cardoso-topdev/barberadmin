import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Navbar from '../components/Navbar/Navbar';

const NuevoServicio = ({ setConsulta }) => {
  const history = useHistory();
  const [servicio, setServicio] = useState([]);

  const actualizarState = (e) => {
    setServicio({
      ...servicio,
      [e.target.name]: e.target.value,
    });
  };

  const crearServicio = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("https://ajbarbershop.herokuapp.com/api", servicio);
    console.log(data);
    setConsulta(true);
    history.push("/servicios");
  };


  return (
    <Fragment>
      <div className="contenedor-nav">
        <Navbar />
      </div>
      <div className="container d-flex align-items-center flex-column">
        <h1 className="titulos mt-5">AJ BarberShop </h1>
        <h3 className="titulos mt-3">Agregar Servicio</h3>

        <div className="contenedor nuevo-servicio mt-3">
          <form className="form-nuevo" onSubmit={crearServicio}>
            <input
              type="text"
              placeholder="Nombre del servicio"
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
              placeholder="Duracion en minutos"
              name="duracion"
              id="duracion"
              onChange={actualizarState}
            ></input>
            <input
              type="number"
              placeholder="Costo"
              name="costo"
              id="costo"
              onChange={actualizarState}
            ></input>
            {/**/}
            <input
              className="btn btn-nuevo mt-3"
              type="submit"
              value="Agregar Servicio"
            ></input>
            <Link className="btn btn-nuevo" to={"/servicios"}>
              Regresar
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NuevoServicio;
