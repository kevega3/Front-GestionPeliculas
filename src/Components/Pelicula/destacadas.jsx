import React, { useState, useEffect } from "react";
import { getDestacadas } from "../Services/peliculasServices";
import Pelicula from "./pelicula";
import Grid from "@mui/material/Grid";
const Destacadas = () => {
  const [peliculas, setpeliculas] = useState([]);

  const handleDestacadas = async () => {
    const { data: peliculas } = await getDestacadas(5);
    setpeliculas(peliculas);
  };

  useEffect(() => {
    handleDestacadas();
  }, []);

  return (
    <>
      <h2>Peliculas Destacadas</h2>
      <Grid container spacing={2}>
        {peliculas.map((pelicula) => (
          <Pelicula datos={pelicula} key={pelicula.idPelicula}></Pelicula>
        ))}
      </Grid>
    </>
  );
};

export default Destacadas;
