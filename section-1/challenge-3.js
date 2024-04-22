import {
    validateIsNumber,
    validateOptions,
} from '../functions.js';

let initialBudget,
    lodging, transport, food, numberOfDays,
    requiredBudget, overage,
    missingBudget, change, continueAdd,
    addSouvenir, namesouvenir, price,
    souvenir;
const minimumOverage = 50;
let souvenirsStock = [];
let showSouvenirs = "";
let totalSumSouvenirs = 0;

do {
    initialBudget = validateIsNumber("¿Cuál es tu presupuesto inicial?");
    numberOfDays = validateIsNumber("¿Cuantos días durará tu viaje?");
    lodging = validateIsNumber("¿Cuál es el costo estimado por día del hospedaje?");
    transport = validateIsNumber("¿Cuál es el costo estimado por día del transporte?");
    food = validateIsNumber("¿Cuál es el costo estimado por día de la alimentación?");
    requiredBudget = (numberOfDays * (lodging + transport + food + minimumOverage)); //Calculate Required Budget Without Souvenirs
    overage = (initialBudget - requiredBudget);                                        //Calculate overage for extra purchases
    missingBudget = (requiredBudget - initialBudget);                                  //Calculate shortfall in case the budget is not enough



    if (overage > 0) {
        alert(`Excelente, Descontando el minimo para emergencias de ${minimumOverage}, tu presupuesto es suficiente y te sobran ${overage} $ para comprar articulos extra.`);
        addSouvenir = validateOptions("12", "presiona 1 para añadir un souvenir, presiona 2 para continuar.");
        if (addSouvenir == '1') {
            let i = 0;                  //counter for each cycle 'addSouvenir', index of the 'souvenirsStock' array.
            do {
                namesouvenir = prompt("Nombre del souvenir:");
                price = validateIsNumber("precio:");
                souvenir = {
                    namesouvenir,
                    price,
                }
                souvenirsStock.push(souvenir);
                totalSumSouvenirs += souvenirsStock[i].price;
                i++;
            
                if (totalSumSouvenirs > overage) {
                    alert("Has superado el valor de tu presupuesto, te recomiendo que reconsideres tu lista de souvenirs.")
                    let x = validateOptions("12", "presiona 1 para eliminar el ultimo articulo de la lista, presiona 2 para ver la lista de articulos por orden de precio.");
                    if (x == '1') {
                        souvenirsStock.pop();
                    }
                    else {
                        souvenirsStock.sort((a, b) => {
                            return a.price - b.price;
                        });
                        // I create the string 'showsouvenirs' to show it to the user by means of an 'alert'
                        for (let j = 0; j < souvenirsStock.length; j++) {
                        showSouvenirs += `nombre : ${souvenirsStock[j].namesouvenir} \nprecio : ${souvenirsStock[j].price}\n\n`;
                        }
                    alert(showSouvenirs);
                    continueAdd == false;
                    }
                }    
                else {
                    for (let j = 0; j < souvenirsStock.length; j++) {
                        showSouvenirs += `nombre : ${souvenirsStock[j].namesouvenir} \nprecio : ${souvenirsStock[j].price}\n\n`;
                        }
                    continueAdd = confirm("Presiona 'Aceptar' para agregar otro souvenir o 'Cancelar' para continuar");
                    if (continueAdd == false){
                        alert(showSouvenirs);
                    }
                    change == false;  //for the program to end.
                }
            } while (continueAdd == true)         
        }
        else {
            alert("Excelente, disfruta tu viaje");
        }
    }
    else {
        if (overage == 0) {
            alert(`Excelente, Incluyendo el minimo para emergencias de ${minimumOverage}, tu presupuesto es suficiente para el viaje pero no puedes comprar articulos extras`);
            change = confirm("¿Deseas cambiar el valor de tu presupuesto o el costo de tu viaje?, si presionas cancelar se cerrara el programa.");
        }
        else {
            alert(`Tu presupuesto es insuficiente, Incluyendo el minimo para emergencias de ${minimumOverage}, te faltan ${missingBudget} $`);
            change = confirm("¿Deseas cambiar el valor de tu presupuesto o el costo de tu viaje?, si presionas cancelar se cerrara el programa.");
        }
    }
} while (change == true)



