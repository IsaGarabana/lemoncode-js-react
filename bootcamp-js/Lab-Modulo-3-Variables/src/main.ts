import './style.css';

const estiloNombre: string = 'font-size: 15px ; background-color: limegreen';

interface Genre {
  rock: string;
  clásica: string;
  hardRock: string;
  popRock: string;
}
const genre: Genre = {
  rock: '🎸 Rock',
  clásica: '🎼 Clásica',
  hardRock: '🤘 Hard Rock',
  popRock: '🎵 Pop Rock',
};

interface Band {
  name: string;
  yearOfCreation: number;
  isActive: boolean;
  style: string;
}

const beatles: Band = {
  name: 'The Beatles',
  yearOfCreation: 1960,
  isActive: true, //Esto es más falso que ni sé! :D
  style: genre.popRock,
};

const queen: Band = {
  name: 'Queen',
  yearOfCreation: 1970,
  isActive: false,
  style: genre.rock,
};

const acdc: Band = {
  name: 'AC DC',
  yearOfCreation: 1973,
  isActive: true,
  style: genre.hardRock,
};

const beethoven: Band = {
  name: 'Ludwing Van Beethoven',
  yearOfCreation: 1770,
  isActive: false,
  style: genre.clásica,
};

const rolling: Band = {
  name: 'The Rolling Stones',
  yearOfCreation: 1962,
  isActive: true,
  style: genre.rock,
};

console.log(
  `Nombre: %c${beatles.name}`,
  estiloNombre,
  `/ Año: ${beatles.yearOfCreation} / Activo: ${beatles.isActive} / Estilo: ${beatles.style}`
);
console.log(
  `Nombre: %c${queen.name}`,
  estiloNombre,
  `/ Año: ${queen.yearOfCreation} / Activo: ${queen.isActive} / Estilo: ${queen.style}`
);

console.log(
  `Nombre: %c${acdc.name}`,
  estiloNombre,
  `/ Año: ${acdc.yearOfCreation} / Activo: ${acdc.isActive} / Estilo: ${acdc.style}`
);

console.log(
  `Nombre: %c${beethoven.name}`,
  estiloNombre,
  `/ Año: ${beethoven.yearOfCreation} / Activo: ${beethoven.isActive} / Estilo: ${beethoven.style}`
);
console.log(
  `Nombre: %c${rolling.name}`,
  estiloNombre,
  `/ Año: ${rolling.yearOfCreation} / Activo: ${rolling.isActive} / Estilo: ${rolling.style}`
);
