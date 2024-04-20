export function validateNumber(message) {
    let num;
    do {
        num = prompt(message);
        if (isNaN(num)) {
            alert("El valor ingresado no es valido, intenta de nuevo.");
        }
    } while (isNaN(num));
    return (num);
}
export function showAvailability(value) {
    if(value){
        return ("Si");
    }
    else{
        return ("No");
    }
}