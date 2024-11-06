import axios from "./axioServices";

export function Registrar(usuario) {
  return axios.post("Usuario/", usuario);
}

export function login(usuario) {
  return axios.post("Login/", usuario);
}
