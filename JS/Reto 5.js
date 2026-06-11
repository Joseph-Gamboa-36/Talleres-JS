let nota = parseInt(prompt("Ingresa una nota"));
let Aprobado;
if (nota >= 0&& nota <=69) {
    Aprobado = "No Aprobado";
    console.log(Aprobado);
} else if (nota >= 70&& nota <=79) {
    Aprobado = "Aprobado";
    console.log(Aprobado);
} else if (nota >= 80&& nota <= 89) {
    Aprobado = "Notable";
    console.log(Aprobado);
} else if (nota > 90&& nota <= 100) {
    Aprobado = "Sobresaliente";
    console.log(Aprobado);
}
if (nota > 100) {
    Aprobado = "Nota Inválida";
    console.log(Aprobado);
} else if (nota < 0) {
    Aprobado = "Nota Inválida";
    console.log(Aprobado);
}