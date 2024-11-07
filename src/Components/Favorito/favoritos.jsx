import React, { useContext, useState } from "react";
import FavoritoItem from "./favoritoItem";
import { Grid } from "@mui/material";
import { FavoritoContext } from "../Context/favoritoContext";

const Favoritos = () => {
  const { itemsFav } = useContext(FavoritoContext);
  const [favoritos, setFavoritos] = useState(itemsFav);
  return (
    <>
      <h2>
        Mis Favoritos{" "}
        {itemsFav.length === 0 && "(No tiene peliculas favoritas en su lista )"}
      </h2>

      <Grid container spacing={2}>
        {itemsFav.map((pelicula) => (
          <FavoritoItem pelicula={pelicula} key={pelicula.idPelicula} />
        ))}
      </Grid>
    </>
  );
};

export default Favoritos;
