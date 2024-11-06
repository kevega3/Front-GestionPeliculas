import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Rating from "@mui/material/Rating";

const Pelicula = (props) => {
  const [botones, setBotones] = useState("");
  const favorito = useRef();

  const setFavorito = () => {
    favorito.current.style.backgroundColor = "green";
  };
  return (
    <>
      <Grid container item xs={12} sm={4} lg={3}>
        <Paper style={{ padding: 5, textAlign: "center" }}>
          {/* <div>
            <button
              ref={favorito}
              style={{ backgroundColor: "yellow" }}
              onClick={() => {
                setFavorito();
              }}
            >
              Favorito
            </button>
          </div> */}
          <h2>{props.datos.titulo}</h2>
          <Icon color={"disabled"} style={{ cursor: "pointer" }}>
            favorite
          </Icon>
          <div>
            <img width={200} src={props.datos.portada} alt="" />
          </div>
          <div>
            <Rating value={props.datos.estrellas} readOnly />
          </div>
          <div>{props.datos.sinopsis}</div>
          <br />
          <div> {`Genero :${props.datos.genero}`}</div>
          <br />
          <div>{`Director: ${props.datos.director}`}</div>
          <br />
          <div>{`Año: ${props.datos.anio}`}</div>
          <br />
          <div>
            <b>{`Precio: ${props.datos.precio}`}</b>
          </div>
          <hr />
          <div>
            <Button
              variant="contained"
              color="primary"
              disabled={botones}
              onClick={() => {
                setBotones("disabled");
                alert("¡Has comprado esta película!");
              }} //poner primero sin corchetes, mostrar el error y explicar que se pasa como array
            >
              Comprar
            </Button>
            &nbsp;
            <Button
              variant="outlined"
              color="secondary"
              disabled={botones}
              onClick={() => {
                setBotones("disabled");
              }}
            >
              Agregar al Carrito
            </Button>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default Pelicula;
