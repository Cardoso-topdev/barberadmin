import React from "react";
import { Fragment } from "react";
import { GiExpense } from "react-icons/gi";
import { MdAttachMoney, MdShoppingCart } from "react-icons/md";
import { RiFileHistoryFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <Fragment>
      <div className="contenedor-nav">
        <Navbar />
      </div>
      <div className="container d-flex align-items-center flex-column">
        <h1 className="titulos mt-5">AJ BarberShop </h1>
        <h3 className="titulos mt-3 mb-5">Menu</h3>

        <div className="menu">
          <div className="menu-item">
            <Link to="/barberadmin/overview">
              <MdAttachMoney />
              <h3>Overview</h3>
            </Link>
          </div>

          <div className="menu-item">
            <Link to="/barberadmin/servicios">
              <MdShoppingCart />
              <h3>Servicios</h3>
            </Link>
          </div>

          <div className="menu-item">
            <Link to="/barberadmin/historialventas">
              <RiFileHistoryFill />
              <h3>Ventas</h3>
            </Link>
          </div>

          <div className="menu-item">
            <Link to="/barberadmin/salidas">
              <GiExpense />
              <h3>Salidas</h3>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
