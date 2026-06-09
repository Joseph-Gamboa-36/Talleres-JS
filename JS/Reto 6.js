const saldo = 1000000;
const retiro = 300000;
const monto;
if (retiro > saldo) {
  monto = "Fondos insuficientes";
} else if (retiro <= 0) {
  monto = "Monto Inválido";
}
if (retiro % 10000 === 0) {
  saldo = saldo - retiro;
  console.log("Retiro Exitoso");
  console.log("Nuevos saldo: $" + saldo);
} else (console.log("Solo se permiten retiros múltiplos de 10.000"))

