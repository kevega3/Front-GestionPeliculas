import { Container, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Registrar } from "../Services/usuariosServices";
import { useNavigate } from "react-router-dom";
import Icon from "@mui/material/Icon";
function Registro() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    Nombre: "",
    Apellido: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
    console.log(usuario);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(usuario);
    await Registrar(usuario);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "grey" }}>Venta de Peliculas</h2>
        <h2>Registrate ahora</h2>
        &nbsp;
        <Icon color="action">account_circle</Icon>
        <TextField
          onChange={(e) => handleChange(e)}
          name="Nombre"
          required
          placeholder="Ingresa el nombre"
          style={{ width: 300 }}
          variant="standard"
        ></TextField>
        &nbsp;
        <TextField
          onChange={(e) => handleChange(e)}
          name="Apellido"
          required
          placeholder="Ingresa tu apellido"
          variant="standard"
          style={{ width: 300 }}
        />
        <br />
        <br />
        <Icon color="action">mail_outline</Icon>
        <TextField
          onChange={(e) => handleChange(e)}
          variant="standard"
          name="Email"
          type="email"
          required
          placeholder="Ingresa tu email"
          style={{ width: 300 }}
        />
        <Icon color="action">vpn_key</Icon>
        <TextField
          onChange={(e) => handleChange(e)}
          name="Password"
          type="password"
          required
          placeholder="Ingresa tu password"
          variant="standard"
          style={{ width: 300 }}
        />
        <br />
        <br />
        <hr />
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/login/")}
        >
          Volver
        </Button>
        &nbsp; &nbsp;
        <Button variant="contained" color="secondary" type="submit">
          Registrate
        </Button>
      </form>
    </Container>
  );
}

export default Registro;
