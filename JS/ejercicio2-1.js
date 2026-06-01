// 1. Declara tus datos personales
const nombre = "Joseph";
const apellido = "Gamboa";
const edad = 18;
const ciudad = "Cúcuta";
let estudiante = true;

// 2. Imprime una tarjeta personal en consola
console.log("=== TARJETA PERSONAL ===");
console.log(`Nombre: ${nombre} ${apellido}`);
console.log(`Edad: ${edad} años`);
console.log(`Ciudad: ${ciudad}`);
console.log(`¿Es estudiante?: ${estudiante}`);

// 3. Calcula el año de nacimiento aproximado
const anioActual = 2026;
const anioNacimiento = anioActual - edad;
console.log(`Año aproximado de nacimiento: ${anioNacimiento}`);