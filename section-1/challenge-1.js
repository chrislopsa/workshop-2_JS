const travelDestination = prompt("¿Cual es tu lugar de destino?");

let numberOfDays = prompt("¿Cuantos días durará tu viaje?");
let budgetTravel = prompt("¿Cual es tu presupuesto estimado?");


const costActivities = 50;
let overage = (budgetTravel-(costActivities*numberOfDays));
let missingBudget = ((costActivities*numberOfDays)-budgetTravel);

if ((costActivities*numberOfDays) > budgetTravel){
    alert("\nAlerta, tu presupuesto es insuficiente, te faltan "+missingBudget+ " $");
}
else{
    if ((costActivities*numberOfDays) == budgetTravel){
        alert("\nExcelente, tu presupuesto es suficiente");
    }
    else{
        alert("\nExcelente, tu presupuesto es suficiente y te sobran "+overage+ " $");
    }
}
let change = prompt("Presiona '0' para cambiar tu Presupuesto o '1' para cambiar la duración de tu viaje:");

if (change=='1'){
    numberOfDays = prompt("¿Cuantos días durará tu viaje?");
    document.write("Lugar de destino: ",travelDestination);
    document.write("<br>Duracion del viaje: ",numberOfDays," días");
    document.write("<br>Presupuesto estimado: ",budgetTravel);
    overage = (budgetTravel-(costActivities*numberOfDays));
    missingBudget = ((costActivities*numberOfDays)-budgetTravel);
    if ((costActivities*numberOfDays) > budgetTravel){
        document.write("<br>Alerta, tu presupuesto es insuficiente, te faltan ",missingBudget, " $");
    }
    else{
        if ((costActivities*numberOfDays) == budgetTravel){
            document.write("<br>Excelente, tu presupuesto es suficiente");
        }
        else{
            document.write("<br>Excelente, tu presupuesto es suficiente y te sobran ",overage, " $");
        }
    }
}
else{
    budgetTravel = prompt("¿Cual es tu presupuesto estimado?");
    document.write("Lugar de destino: ",travelDestination);
    document.write("<br>Duracion del viaje: ",numberOfDays," días");
    document.write("<br>Presupuesto estimado: ",budgetTravel);
    overage = (budgetTravel-(costActivities*numberOfDays));
    missingBudget = ((costActivities*numberOfDays)-budgetTravel);
    if ((costActivities*numberOfDays) > budgetTravel){
        document.write("<br>Alerta, tu presupuesto es insuficiente, te faltan ",missingBudget, " $");
    }
    else{
        if ((costActivities*numberOfDays) == budgetTravel){
            document.write("<br>Excelente, tu presupuesto es suficiente");
        }
        else{
            document.write("<br>Excelente, tu presupuesto es suficiente y te sobran ",overage, " $");
        }
    }
}
