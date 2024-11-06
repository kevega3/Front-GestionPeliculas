import axios from "./axioServices";

export function Registrar(usuario) {
  return axios.post("Usuario/", usuario);
}

export function Login(usuario) {
  return axios.post("Login/", usuario);
}
