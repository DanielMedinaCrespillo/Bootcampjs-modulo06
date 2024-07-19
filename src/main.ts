import "./style.css";
import {
  handleButtom,
  revisarPuntos,
  handleMostrarCarta,
  mostrarPuntuacion,
} from "./ui";
import { partidaNueva } from "./motor";

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
