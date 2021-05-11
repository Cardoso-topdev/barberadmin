import React from "react";
import { Fragment } from "react";
import {Link} from 'react-router-dom';

const ListaServicios = ({service}) => {
  return (
    <Fragment>
      <div className="col-md-8 mx-auto">
        <div className="list-group">
          {service.map((servicio) => (
            <Link
              className="list-group-item list-group-item-action flex-column align-items-start"
              key={servicio.id}
              to={`/transacciones/${servicio.id}`}
            >
              <div className="d-flex w-100 justify-content-around">
                <div>
                <h3>{servicio.nombre}</h3>
                <p>Duracion: {servicio.duracion} minutos</p>
                </div>
                <p className="d-flex align-items-center">$ {servicio.costo}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ListaServicios;
