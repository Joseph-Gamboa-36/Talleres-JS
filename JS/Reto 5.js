let nota = 99;
let Aprobado;
if (nota >= 0&& nota <=69) {
    Aprobado = "No Aprobado";
} else if (nota >= 70&& nota <=79) {
    Aprobado = "Aprobado";
} else if (nota >= 80&& nota <= 89) {
    Aprobado = "Notable";
} else if (nota > 90&& nota <= 100) {
    Aprobado = "Sobresaliente";
}
if (nota > 100) {
    Aprobado = "Nota Inválida";
} else if (nota < 0) {
    Aprobado = "Nota Inválida";
}
console.log(`Con ${nota} de nota, estas: ${Aprobado}`);
