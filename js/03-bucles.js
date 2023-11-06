/*
while(condicion){
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumple en algun momento
}
*/
let numero = 1;

// document.write('<p>Renglon número ' + numero + '</p>')

while (numero <= 10) {
  document.write(`<p>Renglon número ${numero} </p>`);
  numero++;
}

/*
do{
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumple en algun momento
} while (condicion) 
*/

let contador = 10;

do {
  document.write(`<p>Renglon número ${contador} con do-while</p>`);
  contador--;
} while (contador >= 1);

/*
for(inicializo una variable; condicion logica; incremeno o decremento una variable){
  todas las lineas de codigo que quiero repetir varias veces
}
*/

for (let renglon = 1; renglon <= 10; renglon++) {
  document.write(`<p>Renglon número ${renglon} con for</p>`);
  
}