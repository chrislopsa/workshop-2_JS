import {
    validateNumber,
    showAvailability
} from '../functions.js';

let souvenirsStock = [];
let option; 
let flag = true;
let count = 0;
let showSouvenirs = "";
let namesouvenir, price, available, souvenir;

while(flag){
    do{
        option = prompt("presiona 1 para añadir un souvenir, presiona 2 para ver la lista de souvenirs o 3 para salir.");

        if (option == '3'){
            flag = false;
            break;     
        }
        else{
            if (option == '1') {   
                namesouvenir = prompt("Nombre del souvenir:");
                price = validateNumber("precio:");
                available = showAvailability(confirm("Presiona 'Aceptar' si el souvenir se encuentra disponible o 'Cancelar' si no se encuentra disponible"));
                souvenir = {
                    namesouvenir,
                    price,
                    available
                }
                souvenirsStock.push(souvenir);
                count++;
            }
            else {
                if (option == '2') {
                    console.log(souvenirsStock);
                    
                    for (let i= 0; i < count; i++){

                        showSouvenirs += `nombre : ${souvenirsStock[i].namesouvenir} \nprecio : ${souvenirsStock[i].price} \ndisponibilidad : ${souvenirsStock[i].available}\n\n`             
                    }
                    alert(showSouvenirs);
                }
                else {
                    alert("Has presionado una opción no valida");
                }
            }
        }       
    }while(option != '1' && option != '2' && option != '3');
}

