import "./style.css";

let puntos = 0;

const sumaPuntuacion = (puntos: number, numeroCarta: number) => {
  if (numeroCarta > 7) {
    numeroCarta = 0.5;
  }
  puntos += numeroCarta;
  return puntos;
};

const dameUrlCarta = (numeroCarta: number) => {
  switch (numeroCarta) {
    case 1:
      return "images/1_as-copas.jpg";
    case 2:
      return "images/2_dos-copas.jpg";
    case 3:
      return "images/3_tres-copas.jpg";
    case 4:
      return "images/4_cuatro-copas.jpg";
    case 5:
      return "images/5_cinco-copas.jpg";
    case 6:
      return "images/6_seis-copas.jpg";
    case 7:
      return "images/7_siete-copas.jpg";
    case 10:
      return "images/10_sota-copas.jpg";
    case 11:
      return "images/11_caballo-copas.jpg";
    case 12:
      return "images/12_rey-copas.jpg";
    default:
      return "images/back.jpg";
  }
};

const plasmarCarta = (UrlCarta: string) => {
  const elementImagenCarta = document.getElementById("cartaRobada");

  if (elementImagenCarta && elementImagenCarta instanceof HTMLImageElement) {
    elementImagenCarta.src = UrlCarta;
  }
};

const gameOver = (): boolean => {
  return puntos > 7.5;
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

const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const generarNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }
  return numeroAleatorio;
};

const mostrarPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntosActual");

  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Llevas ${puntos} puntos`;
  }
};

document.addEventListener("DOMContentLoaded", mostrarPuntuacion);

const handleButtom = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCarta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = dameUrlCarta(numeroCarta);
  plasmarCarta(urlCarta);
  puntos = sumaPuntuacion(puntos, numeroCarta);
  mostrarPuntuacion();
  const finDePartida = gameOver();
  mensajeGameOver(finDePartida);
};

const botonRobar = document.getElementById("robar");
if (botonRobar && botonRobar instanceof HTMLButtonElement) {
  botonRobar.addEventListener("click", handleButtom);
}

const tipoPuntuacion = (puntos: number) => {
  if (puntos <= 4) {
    return "Has sido muy conservador";
  } else if (puntos <= 5) {
    return "Te ha entrado el canguelo eh?";
  } else if (puntos <= 7) {
    return "Casi casi...";
  } else if (puntos === 7.5) {
    return "¡Lo has clavado! ¡Enhorabuena!";
  } else {
    return "No se que ha pasado";
  }
};

const mensajePuntuacion = (frasePuntuacion: string) => {
  const elementoMensaje = document.getElementById("puntuacion");

  if (elementoMensaje) {
    elementoMensaje.innerHTML = frasePuntuacion;
  }
};

const revisarPuntos = () => {
  const frasePuntuacion = tipoPuntuacion(puntos);
  mensajePuntuacion(frasePuntuacion);
  desactivarBotonRobar();
  desactivarBotonPlantarse();
  activarbotonNuevaPartida();
  activarBotonSiguienteCarta();
};

const plantarPuntos = document.getElementById("plantarse");
if (plantarPuntos && plantarPuntos instanceof HTMLButtonElement) {
  plantarPuntos.addEventListener("click", revisarPuntos);
}

const partidaNueva = () => {
  location.reload();
};

const empezarPartida = document.getElementById("nuevojuego");
if (empezarPartida && empezarPartida instanceof HTMLButtonElement) {
  empezarPartida.addEventListener("click", partidaNueva);
}

const handleMostrarCarta = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCarta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = dameUrlCarta(numeroCarta);
  plasmarCarta(urlCarta);
  puntos = sumaPuntuacion(puntos, numeroCarta);
  mostrarPuntuacion();
};

const mostrarCarta = document.getElementById("siguienteCarta");
if (mostrarCarta && mostrarCarta instanceof HTMLButtonElement) {
  mostrarCarta.addEventListener("click", handleMostrarCarta);
}
