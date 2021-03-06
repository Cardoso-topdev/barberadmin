import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { MdAttachMoney, MdShoppingCart, MdHome } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import {RiFileHistoryFill} from 'react-icons/ri';
import "./Navbar.css";

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/">
          <MdHome />
        </Link>
        <Link to="/overview">
          <MdAttachMoney />
        </Link>
        <Link to="/servicios">
          <MdShoppingCart />
        </Link>
        <Link to="/historialventas">
        <RiFileHistoryFill />
        </Link>
        <Link to="/salidas">
          <GiExpense />
        </Link>
      </nav>
    </Fragment>
  );
}

export default Navbar;
