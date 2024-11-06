import React from "react";
import Peliculas from "../Pelicula/peliculas";
import { Route, Routes } from "react-router-dom";
import Favoritos from "../Favorito/favoritos";
import Carrito from "../Carrito/carrito";
import Destacadas from "../Pelicula/destacadas";
import Buscar from "../Pelicula/buscar";
import Registro from "../Registro/registro";

const Body = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Peliculas />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/destacadas" element={<Destacadas />} />
        <Route path="/buscar/:valor" element={<Buscar />} />
        <Route path="/buscar/" element={<Peliculas />}></Route>
        <Route path="/registro/" element={<Registro />}></Route>
      </Routes>
    </section>
  );
};

export default Body;
