import {
    validateIsNumber,
    validateOptions,
} from '../functions.js';

let dailyExpenses = [];
let dailyBudget, descriptionExpense, valueExpense,
    expense, dailySaving, overage, continueAdd,
    budgetAfterSave, addExpense;
let sumDailyExpenses = 0;

do{
    dailyBudget = validateIsNumber("¿Cuál es tu presupuesto diario?");
    console.log(`Presupuesto diario: ${dailyBudget}$`);
    dailySaving = validateIsNumber("¿Cuánto quieres ahorrar hoy?");
    console.log(`Ahorro estimado : ${dailySaving}$`);
  
    if (dailyBudget < dailySaving) {
        alert("La cantidad de ahorro no puede ser mayor a tu presupuesto diario");
    }
}while(dailyBudget < dailySaving)

budgetAfterSave = dailyBudget - dailySaving;
overage = budgetAfterSave;
console.log(`Tienes ${budgetAfterSave}$ disponibles para gastos.`)
addExpense = validateOptions("12", "presiona 1 para añadir un gasto, presiona 2 para continuar.");

if (addExpense == '1') {
    let i = 0;                         //counter for each cycle 'addExpense', index of the 'dailyExpenses' array.
    do {
        descriptionExpense = prompt("Nombre o descripcion del gasto:");
        valueExpense = validateIsNumber("valor del gasto:");
        expense = {
            descriptionExpense,
            valueExpense
        }
        dailyExpenses.push(expense);
        sumDailyExpenses += dailyExpenses[i].valueExpense;
        overage -= dailyExpenses[i].valueExpense;

        console.log(`Descripción:${dailyExpenses[i].descriptionExpense}\nValor:${dailyExpenses[i].valueExpense}`);
        console.log(`Te quedan ${overage}$ disponibles para gastos.`);
        i++;
        
        if (sumDailyExpenses > budgetAfterSave){
            alert("Has superado el valor de tu presupuesto y comprometes la cantidad de dinero que quieres ahorrar.")
            let x = validateOptions("12", "presiona 1 para eliminar el ultimo gasto de la lista, presiona 2 para ver la lista de gastos por cantidad de menor a mayor.");
            if (x == '1') {
                dailyExpenses.pop();
            }
            else {
                dailyExpenses.sort((a, b) => {
                    return a.valueExpense - b.valueExpense;
                });

                console.table(dailyExpenses);
            }
        }
        continueAdd = confirm("Presiona 'Aceptar' para agregar otro gasto o 'Cancelar' para ver la lista de gastos");
        if (!continueAdd) {
            console.table(dailyExpenses);
        }
    } while (continueAdd == true)
}