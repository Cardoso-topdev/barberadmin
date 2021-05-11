import React, {Fragment} from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import '../components/ListaServicios'
import ListaServicios from "../components/ListaServicios";
import Navbar from '../components/Navbar/Navbar';

const Servicios = ({ service }) => {

  return (
    <Fragment>
      <div className="contenedor-nav">
      <Navbar/>
      </div>
      <div className="container d-flex flex-column">
        <h1 className="titulos mt-5">AJ BarberShop</h1>
        <h3 className="titulos mt-3">Servicios</h3>
        <div className='row flex-column align-items-center'>

        <div className="btn-container text-center">
        <Link to={"/nuevoservicio"} className="col-md-8 mx-auto btn btn-nuevo mt-3 mb-5">
          Agregar nuevo servicio
        </Link>
        </div>

        {service.length !== 0? <ListaServicios service={service}/>: <p>No hay servicios agregados</p>}

        </div>
      </div>
    </Fragment>
  );
};

export default Servicios;
