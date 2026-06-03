// Calcular el área de un triángulo
const baseTriángulo = 10;
const alturaTrángulo = 20;
const areaTriángulo = (baseTriángulo * alturaTrángulo) / 2;
console.log(`Área del Triángulo: ${areaTriángulo} cm²`);

// Calcular el área de un circulo
const radioCirculo = 5;
const areaCirculo = (Math.PI * (radioCirculo ** 2));
console.log(`Área del Circulo: ${areaCirculo} cm²`);

// Calcular el volumen de un cubo
const ladoCubo = 5;
const volumenCubo = (ladoCubo ** 3);
console.log(`Volumen del Cubo: ${volumenCubo} cm³`);

// Verificador de acceso
const edad = 17;
const tieneEntrada = true;
const esVip = true;
let puedeEntrar = edad > 17&& tieneEntrada;
let accesoVIP = puedeEntrar && esVip;
let esMenor = !(edad>17);

console.log("¿Puede entrar?", puedeEntrar);
console.log("¿Acceso VIP?", esVip);
console.log("¿Es menor de edad?",esMenor);