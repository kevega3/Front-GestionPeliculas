import React, { useState, useEffect } from "react";
import Pelicula from "./pelicula";
import { obtenerPeliculas } from "../Services/peliculasServices";
import Grid from "@mui/material/Grid";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  const cargarPeliculas = async () => {
    const { data: peliculas } = await obtenerPeliculas();
    setPeliculas(peliculas);
  };

  useEffect(() => {
    cargarPeliculas();
  }, []);

  return (
    <>
      <div>
        <h2>Todas las peliculas</h2>
      </div>

      <Grid container spacing={2}>
        {peliculas.map((pelicula) => (
          <Pelicula datos={pelicula} key={pelicula.idPelicula}></Pelicula>
        ))}
      </Grid>
    </>
  );
};

export default Peliculas;
