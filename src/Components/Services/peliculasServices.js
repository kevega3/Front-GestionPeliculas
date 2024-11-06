import servicio from "./axioServices";

export function obtenerPeliculas() {
  return servicio.get("Pelicula/");
}

export function buscarPor(buscar) {
  return servicio.get(`Pelicula/BuscarPor/${buscar}`);
}

export function getDestacadas(estrellas) {
  return servicio.get(`Pelicula/GetDestacas/${estrellas}`);
}
