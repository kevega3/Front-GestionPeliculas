import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { buscarPor } from "../Services/peliculasServices";
import Pelicula from "./pelicula";
import { useParams } from "react-router-dom";
const Buscar = (props) => {
  const [peliculas, setpeliculas] = useState([]);
  const { valor } = useParams();

  const handleBuscar = async (buscar) => {
    const { data: peliculas } = await buscarPor(buscar);
    setpeliculas(peliculas);
  };

  useEffect(() => {
    handleBuscar(valor);
  }, [valor]);

  return (
    <>
      <h2>Resultados de la busqueda</h2>
      <Grid container spacing={2}>
        {peliculas.map((pelicula) => (
          <Pelicula datos={pelicula} key={pelicula.idPelicula}></Pelicula>
        ))}
      </Grid>
    </>
  );
};

export default Buscar;
