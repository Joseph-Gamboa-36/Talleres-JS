let saldo = 1000000;
let retiro = 100000;
if (retiro > saldo) {
  console.log("Fondos insuficientes");
} else if (retiro <= 0) {
  console.log("Monto Inválido");
} else if (retiro % 10000 == 0) {
  saldo = saldo - retiro;
  console.log("Retiro Exitoso");
  console.log("Nuevos saldo: $" + saldo);
} else (console.log("Solo se permiten retiros múltiplos de 10.000"))