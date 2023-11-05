/*solicitar al usuario una edad, si el usuario es mayor de 16 años deberia votar
Entre 16 y 18 es optativo y mayores de 70 
Entre 18 y 70 años incluidos es obligatorio*/

const edad = parseInt(prompt('Ingrese su edad: '));

if(edad >= 16 && edad < 18 || edad > 70){
    alert('Es optativo votar');
} else{
    if(edad >= 18 && edad <= 70){
        alert('Usted debe votar')
    } else{
        alert('Usted no puede votar')
    }
}