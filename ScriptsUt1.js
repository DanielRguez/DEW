import dayjs from '../node_modules/dayjs';
//const dayjs = require('dayjs')

    //function PonMayuscula(texto){
      //  texto.toString().toUpperCase();
    //}

/**
 * Realiza un script que solicite la edad, y el nombre completo y muestre el año de nacimiento en función de :
Si el usuario es menor de 18 años, le saldrá, debajo de su nombre completo y año de nacimiento, el mensaje: “Eres menor de edad, no podemos darte de alta hasta el año XXXX” (XXXX será el año en que tendrá 18 años y que debemos calcular previamente)
Si es mayor de 18 años y menor de 25, le saldrá el mensaje: “Tienes un 10% de descuento”
Si es mayor de 25 años, le saldrá el mensaje: “Lo sentimos, pero no tienes descuento”
Si tiene justo 18 o 25 años, le saldrá el mensaje: “Premio, tienes un descuento especial del 20%”
Si introduce mal la edad (registra por ejemplo la edad en palabras en vez de números):
Saldrá un mensaje: “Hay un error, no hemos podido calcular tu edad”
En el año de nacimiento saldrá: “no puede calcularse”

 */

function CompruebaEdad(){
    var valor= prompt("Introduce la fecha de nacimiento en formato (DD/MM/YYYY)");
    var fechaNacimiento = dayjs(valor, "DD/MM/YYYY");
    console.log("Fecha: "+fechaNacimiento);
}
CompruebaEdad();