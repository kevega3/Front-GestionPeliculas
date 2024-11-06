import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Icon from "@mui/material/Icon";
import Badge from "@mui/material/Badge";
const Header = () => {
  return (
    <header>
      <h1>Venta de Películas</h1>
      <br />
      <Link to="/favoritos">
        <Icon color="action" fontSize="large">
          favorite
        </Icon>
      </Link>
      <Badge badgeContent={3} color="secondary"></Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/carrito">
        <Icon color="action" fontSize="large">
          shopping_cart
        </Icon>
      </Link>
      <Badge badgeContent={3} color="primary"></Badge>
    </header>
  );
};

export default Header;
