import "./style.css";
import { partida } from "./modelo";
import {
  handleButtom,
  revisarPuntos,
  handleMostrarCarta,
  mostrarPuntuacion,
} from "./ui";
import { generarNumeroAleatorio, partidaNueva } from "./motor";

partida.numeroAleatorio = generarNumeroAleatorio();

document.addEventListener("DOMContentLoaded", mostrarPuntuacion);

const botonRobar = document.getElementById("robar");
if (botonRobar && botonRobar instanceof HTMLButtonElement) {
  botonRobar.addEventListener("click", handleButtom);
}

const plantarPuntos = document.getElementById("plantarse");
if (plantarPuntos && plantarPuntos instanceof HTMLButtonElement) {
  plantarPuntos.addEventListener("click", revisarPuntos);
}

const empezarPartida = document.getElementById("nuevojuego");
if (empezarPartida && empezarPartida instanceof HTMLButtonElement) {
  empezarPartida.addEventListener("click", partidaNueva);
}

const mostrarCarta = document.getElementById("siguienteCarta");
if (mostrarCarta && mostrarCarta instanceof HTMLButtonElement) {
  mostrarCarta.addEventListener("click", handleMostrarCarta);
}
