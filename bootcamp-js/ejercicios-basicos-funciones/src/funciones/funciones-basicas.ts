// Funciones básicas

// Implementa una función que muestre por consola “Hola Mundo”.

function holamundo() {
  console.log(`Hola mundo!!`);
}
holamundo();

const holamundo2 = (text: string): void => {
  console.log(text);
};
// Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
function saludo(nombre: string) {
  console.log(`Hola, ${nombre}`);
}
saludo('Pepe');

// Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.

function tocapital(text: string) {
  const enMayusculas = text.toLocaleUpperCase();
  console.log(enMayusculas);
  return enMayusculas;
}
tocapital('Pasando el texto a mayúscula');

// Implementa una función que dado un string como parámetro devuelva el string en minúsculas.
const tolowercase = (text: string) => {
  const enMinusculas = text.toLocaleLowerCase();
  console.log(enMinusculas);
  return enMinusculas;
};
tolowercase('PASANDO EL TEXTO A MINÚSCULA');

function tominusculas(text: string) {
  const enMinuscula = text.toLocaleLowerCase();
  console.log(enMinuscula);
  return enMinuscula;
}
tominusculas('VAMOS A VER SI FUNCIONA AHORA!');

// Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.

const sum = (a: number, b: number) => {
  const suma = a + b;
  console.log(suma);
  return suma;
};

sum(28, 234567);

// Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.

const concatenacion = (text1: string, text2: string, text3: string) => {
  const result: string = text1 + text2 + text3;
  console.log(result);
  return result;
};

concatenacion('hola, qué tal? ', 'Estoy concatenando ', 'unos strings.');

// Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null.

const ladificil = (param1: object) => {
  const copiadelobjetoperomismareferencia = {
    ...param1,
    id: null,
  };
  console.log(copiadelobjetoperomismareferencia);
  return copiadelobjetoperomismareferencia;
};
const unobjetocualquiera = {
  título: 'Momo',
  género: 'infantil',
};

ladificil(unobjetocualquiera);
