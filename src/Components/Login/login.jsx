import React, { useEffect, useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import Icon from "@mui/material/Icon";
import { login } from "../Services/usuariosServices";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: token } = await login(usuario);
    if (token !== "") {
      navigate("/destacadas/");
    } else {
      setMsg("Usuario o contraseña incorrecta");
    }
  };

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "grey" }}> Venta de Peliculas</h2>
        <h2>Bienvenido</h2>
        <Icon color="action">mail_outline</Icon>
        <TextField
          variant="standard"
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Ingresa tu email"
          required
          style={{ width: 300 }}
        />
        <br />
        <br />
        <Icon color="action">vpn_key</Icon>
        &nbsp;
        <TextField
          variant="standard"
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          placeholder="Ingresa tu password"
          required
          style={{ width: 300 }}
        />
        <br />
        <br />
        <h4 style={{ color: "red" }}>{msg}</h4>
        <hr />
        <Button type="submit" variant="contained" color="primary">
          login
        </Button>
        &nbsp;
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/registro/")}
        >
          Registro
        </Button>
        &nbsp;
      </form>
    </Container>
  );
};

export default Login;
