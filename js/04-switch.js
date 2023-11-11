//si el usuario presiona 1 consulte el saldo, 2 extraer dinero, 3 ingresar dinero

let saldo = 1000;
let opcion = parseInt(
  prompt(
    "Selecione una opcion: 1- consultar saldo, 2- extraer dinero, 3- ingresar dinero"
  )
);

// if (opcion === 1) {
//   console.log(`Su saldo actual es: ${saldo}`);
// } else if (opcion === 2) {
//   const montoExtraer = parseFloat(prompt("Ingrese el monto que desea extraer"));
//   if (montoExtraer > 0 && montoExtraer <= saldo) {
//     saldo = saldo - montoExtraer;
//     console.log("EXTRACCION EXITOSA");
//     console.log("Saldo disponible: " + saldo);
//   } else {
//     console.log("Ingrese un monto mayor a 0 (cero)");
//   }
// } else if (opcion === 3) {
//   let montoIngresar = parseFloat(prompt("Ingrese el monto que desea agregar"));
//   if (montoIngresar > 0) {
//     saldo = saldo + montoIngresar;
//     console.log("INGRESO EXITOSO");
//     console.log("Su saldo actual es: " + saldo);
//   } else {
//     console.log("Ingrese un monto mayor a 0 (cero)");
//   }
// } else {
//   console.log("Ingrese un opción válida");
// }

switch (opcion) {
  case 1:
    console.log(`Su saldo actual es: ${saldo}`);
    document.write(`Su saldo actual es: ${saldo}<br>`);
    break;
  case 2:
    const montoExtraer = parseFloat(
      prompt("Ingrese el monto que desea extraer")
    );
    if (montoExtraer > 0 && montoExtraer <= saldo) {
      saldo = saldo - montoExtraer;
      console.log("EXTRACCION EXITOSA");
      console.log("Saldo disponible: " + saldo);
      document.write("<p>EXTRACCION EXITOSA</p>");
      document.write("Saldo disponible: " + saldo);
    } else {
      console.log("Ingrese un monto mayor a 0 (cero)");
    }
    break;
  case 3:
    let montoIngresar = parseFloat(
      prompt("Ingrese el monto que desea agregar")
    );
    if (montoIngresar > 0) {
      saldo = saldo + montoIngresar;
      console.log("INGRESO EXITOSO");
      console.log("Su saldo actual es: " + saldo);
      document.write("<p>EXTRACCION EXITOSA</p>");
      document.write("Saldo disponible: " + saldo);
    } else {
      console.log("Ingrese un monto mayor a 0 (cero)");
    }
    break;
  default:
    alert("Ingrese un opción válida");
}
