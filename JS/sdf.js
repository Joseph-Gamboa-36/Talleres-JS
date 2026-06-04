const edad = 25;
let categoria;
if (edad < 0) {
categoria = "Edad inválida";
} else if (edad < 12) {
categoria = "Niño";
} else if (edad < 18) {
categoria = "Adolescente";
} else if (edad < 30) {
categoria = "Joven adulto";
} else if (edad < 60) {
categoria = "Adulto";
} else {
categoria = "Adulto mayor";
}
console.log(`Con ${edad} años eres: ${categoria}`);