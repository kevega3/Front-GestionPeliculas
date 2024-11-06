import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
const Menu = () => {
  const navigate = useNavigate();
  const [buscar, setBuscar] = useState("");

  const handleBuscar = (e) => {
    setBuscar(e.target.value);
  };

  return (
    <nav>
      <TextField
        name="buscar"
        value={buscar}
        placeholder="Busca por genero, titulo, actores"
        onChange={(e) => handleBuscar(e)}
        style={{ width: 300 }}
        id="standard-basic"
        label="Buscar"
        variant="standard"
      />
      <Icon
        onClick={() => {
          setBuscar("");
        }}
        color="action"
        style={{ cursor: "pointer" }}
      >
        close
      </Icon>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/buscar/" + buscar);
        }}
      >
        <Icon color="action">search</Icon>
        Buscar
      </Button>
      &nbsp;
      <Button
        variant="contained"
        onClick={() => {
          navigate("/destacadas/");
        }}
      >
        <Icon color="action">star</Icon>
        Destacadas
      </Button>
      &nbsp;
      <Button
        variant="contained"
        onClick={() => {
          navigate("/peliculas/");
        }}
      >
        <Icon color="action">apps</Icon>
        Todas
      </Button>
    </nav>
  );
};

export default Menu;
