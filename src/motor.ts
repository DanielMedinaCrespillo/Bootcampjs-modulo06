import { partida } from "./modelo";

export const dameUrlCarta = (numeroCarta: number) => {
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

export const sumaPuntuacion = (puntos: number, numeroCarta: number) => {
  if (numeroCarta > 7) {
    numeroCarta = 0.5;
  }
  puntos += numeroCarta;
  return puntos;
};

export const gameOver = (): boolean => {
  return partida.puntos > 7.5;
};

export const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const generarNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }
  return numeroAleatorio;
};

export const tipoPuntuacion = (puntos: number) => {
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

export const partidaNueva = () => {
  location.reload();
};
