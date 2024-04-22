import {
    validateOptions,
} from '../functions.js';

let energyLevel, climate, amountOfWork;

energyLevel =  validateOptions("10","Hola Julian, digita '1' sí tu nivel de energia es alto o '0' sí es bajo.");
if (energyLevel==0){
    console.log("Tomate el día libre.");
} 
while(energyLevel !='0'){
    climate = prompt("Muy bien, ahora: sí el clima es bueno digita cualquier tecla, sí es malo presiona enter");
    amountOfWork = confirm("Por último: sí tienes mucha carga de trabajo presiona 'Aceptar', en caso contrario presiona 'Cancelar'");
    if (amountOfWork){
        console.log("Deberias empezar a trabajar.");
        break;
    }
    if (energyLevel && climate && !amountOfWork){
        console.log("Hoy es un gran día para salir a correr");
        break;
    }
    if (energyLevel && !climate && !amountOfWork){
        console.log("Mejor quedate en casa y trabaja en tus proyectos personales");
        break;
    }
    if (energyLevel==0){
        console.log("Tomate el día libre.");
        break;
    }
}

