import React, { useEffect, createContext, useState } from "react";
import {
  obtenerFavoritos,
  agregarFavorito,
  eliminarFavorito,
} from "../Services/favoritoServices";

export const FavoritoContext = createContext();

export const FavoritoProvider = (props) => {
  const [cantidadFav, setCantidadFav] = useState(0);
  const [itemsFav, setItemsFav] = useState([]);

  const handerFavoritos = async () => {
    const { data: favoritos } = await obtenerFavoritos();
    setItemsFav(favoritos);
    setCantidadFav(favoritos.length);
  };

  const handerEliminarFavoritos = async (Pelicula) => {
    const { data } = await eliminarFavorito({
      idUsuario: 1,
      idPelicula: Pelicula.idPelicula,
    });
    const newItems = itemsFav.filter(
      (item) => item.idPelicula !== Pelicula.idPelicula
    );
    setItemsFav(newItems);
    setCantidadFav(cantidadFav - 1);
  };

  const handerFavoritosAgregar = async (Pelicula) => {
    await agregarFavorito({
      idUsuario: 1,
      idPelicula: Pelicula.idPelicula,
    });
    setCantidadFav(cantidadFav + 1);
    setItemsFav([...itemsFav, Pelicula]);
  };

  useEffect(() => {
    handerFavoritos();
  }, []);
  return (
    <FavoritoContext.Provider
      value={{
        cantidadFav,
        itemsFav,
        handerFavoritosAgregar,
        handerEliminarFavoritos,
      }}
    >
      {props.children}
    </FavoritoContext.Provider>
  );
};
