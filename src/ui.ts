import { partida } from "./modelo";
import {
  dameUrlCarta,
  gameOver,
  generarNumeroAleatorio,
  generarNumeroCarta,
  sumaPuntuacion,
  tipoPuntuacion,
} from "./motor";

const plasmarCarta = (UrlCarta: string) => {
  const elementImagenCarta = document.getElementById("cartaRobada");

  if (elementImagenCarta && elementImagenCarta instanceof HTMLImageElement) {
    elementImagenCarta.src = UrlCarta;
  }
};

const mensajeGameOver = (finDePartida: boolean) => {
  if (finDePartida) {
    const mensaje = "Te has pasado de 7.5, Has perdido";
    const elementoPuntos = document.getElementById("puntuacion");
    if (elementoPuntos) {
      elementoPuntos.innerHTML = mensaje;
    }
    desactivarBotonPlantarse();
    desactivarBotonRobar();
    activarbotonNuevaPartida();
  }
};

const desactivarBotonRobar = () => {
  const botonRobar = document.getElementById("robar");
  if (botonRobar && botonRobar instanceof HTMLButtonElement) {
    botonRobar.disabled = true;
  }
};

const desactivarBotonPlantarse = () => {
  const plantarPuntos = document.getElementById("plantarse");
  if (plantarPuntos && plantarPuntos instanceof HTMLButtonElement) {
    plantarPuntos.disabled = true;
  }
};

const activarbotonNuevaPartida = () => {
  const elementoNuevaPartida = document.getElementById("nuevojuego");
  if (elementoNuevaPartida) {
    elementoNuevaPartida.style.display = "block";
  }
};

const activarBotonSiguienteCarta = () => {
  const elementoSiguienteCarta = document.getElementById("siguienteCarta");
  if (elementoSiguienteCarta) {
    elementoSiguienteCarta.style.display = "block";
  }
};

export const mostrarPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntosActual");

  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Llevas ${partida.puntos} puntos`;
  }
};

const mensajePuntuacion = (frasePuntuacion: string) => {
  const elementoMensaje = document.getElementById("puntuacion");

  if (elementoMensaje) {
    elementoMensaje.innerHTML = frasePuntuacion;
  }
};

export const handleButtom = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCarta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = dameUrlCarta(numeroCarta);
  plasmarCarta(urlCarta);
  partida.puntos = sumaPuntuacion(partida.puntos, numeroCarta);
  mostrarPuntuacion();
  const finDePartida = gameOver();
  mensajeGameOver(finDePartida);
};

export const handleMostrarCarta = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCarta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = dameUrlCarta(numeroCarta);
  plasmarCarta(urlCarta);
  partida.puntos = sumaPuntuacion(partida.puntos, numeroCarta);
  mostrarPuntuacion();
};

export const revisarPuntos = () => {
  const frasePuntuacion = tipoPuntuacion(partida.puntos);
  mensajePuntuacion(frasePuntuacion);
  desactivarBotonRobar();
  desactivarBotonPlantarse();
  activarbotonNuevaPartida();
  activarBotonSiguienteCarta();
};
