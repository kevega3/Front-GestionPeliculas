import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Rating from "@mui/material/Rating";
import { FavoritoContext } from "../Context/favoritoContext";
import { CarritoContext } from "../Context/carritoContext";

const Pelicula = (props) => {
  const { handerFavoritosAgregar, handerEliminarFavoritos } =
    React.useContext(FavoritoContext);
  const { handleAgregarCarrito, handleComprar } =
    React.useContext(CarritoContext);
  const [botones, setBotones] = useState("");
  const favorito = useRef();

  const setFavorito = (pelicula) => {
    if (pelicula.favorito.length === 0) {
      handerFavoritosAgregar(pelicula);

      favorito.current.style.color = "red";
    } else {
      handerEliminarFavoritos(pelicula);

      favorito.current.style.color = "grey";
    }
  };

  return (
    <>
      <Grid container item xs={12} sm={4} lg={3}>
        <Paper style={{ padding: 5, textAlign: "center" }}>
          <h2>{props.datos.titulo}</h2>
          <Icon
            ref={favorito}
            color={props.datos.favorito.length > 0 ? "error" : "disabled"}
            style={{ cursor: "pointer" }}
            onClick={() => setFavorito(props.datos)}
          >
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
                handleComprar([props.datos]);
                setBotones(true);
                alert("¡Has comprado esta película!");
              }}
            >
              Comprar
            </Button>
            &nbsp;
            <Button
              variant="outlined"
              color="secondary"
              disabled={botones}
              onClick={() => {
                handleAgregarCarrito(props.datos);
                setBotones(true);
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
