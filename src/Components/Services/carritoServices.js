import axios from "./axioServices";

export function comprar(carrito) {
  return axios.post("Carrito/Comprar/", carrito);
}
