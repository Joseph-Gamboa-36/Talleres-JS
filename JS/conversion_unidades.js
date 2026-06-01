// Conversión de temperaturas: Celsius a Fahrenheit
const celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log(`${celsius}°C equivalen a ${fahrenheit}°F`);

// Conversión de kilómetros a millas
const kilometros = 100;
const millas = kilometros * 0.621371;
console.log(`${kilometros} km equivalen a ${millas.toFixed(2)} millas`);

// Conversión de pesos colombianos a dólares (tasa de ejemplo: 4000)
const pesos = 500000;
const tasa = 4000;
const dolares = pesos / tasa;
console.log(`$${pesos} COP equivalen a US$${dolares.toFixed(2)}`);

const peso = 70;
const estatura = 1.75;

const imc = peso / (estatura * estatura);
console.log(`Tu IMC es: ${imc.toFixed(2)}`);