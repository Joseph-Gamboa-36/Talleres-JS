let contrasena
let clave = 123;
do {
    contrasena = parseInt(prompt("Ingrese su contraseña"));
    console.log(`Contraseña incorrecta: ${contrasena}`)
} while (contrasena !== clave);
