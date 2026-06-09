let saldo = 1000000;
let retiro = 700000;
let monto;
if (retiro > saldo) {
  monto = "Fondos insuficientes";
  console.log(monto);
} else if (retiro <= 0) {
  monto = "Monto Inválido";
  console.log(monto);
} else if (retiro % 10000 === 0) {
  saldo = saldo - retiro;
  console.log("Retiro Exitoso");
  console.log("Nuevos saldo: $" + saldo);
} else (console.log("Solo se permiten retiros múltiplos de 10.000"))