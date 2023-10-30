//inicializo una variable con let
let anioActual = 2023;

//mostrar mensaje
console.log(anioActual);
console.log('Año actual: ' + anioActual);

//modificar el valor de una variable
anioActual = anioActual + 1;
console.log('Año actual: ' + anioActual);

//inicializo una variable con const
const url = 'https://universe.rollingcodeschool.com/';
console.log(url);

document.write('Hola mundo');
document.write('<h1>Hola mundo</h1>');
document.write('<h1 class = "titulo">Hola mundo ' + anioActual + '</h1>');

//ventana emergente
alert('Esto es un ejemplo de una alerta');

//solicitar al número al usuario y luego sumarle 5, último mostrar el reultado de la suma
const numeroSolicitado = parseInt(prompt('Ingrese un número del 1 al 100'));
console.log(numeroSolicitado);

//diferentes formas de escribir un resultado
console.log('Resultado: ' + (numeroSolicitado + 5));
console.log('Resultado:', numeroSolicitado + 5);
console.log(numeroSolicitado + 5);

//transformar o parsear un numero de string a formato numerico
//parseInt("100")
//parseFloat("100.50")
