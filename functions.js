export function validateIsNumber(message) {
    let num;
    do {
        num = prompt(message);
        if (isNaN(num)) {
            alert("El valor ingresado no es valido, intenta de nuevo.");
        }
    } while (isNaN(num));
    return Number(num);
}
export function showAvailability(value) {
    if(value){
        return ("Si");
    }
    else{
        return ("No");
    }
}
export function validateOptions(options,message){
    let option;
    do{
        option = prompt(message);
        if (options.includes(option.toUpperCase())){
            return option.toUpperCase();
        }
        else{
            alert("El valor ingresado no es valido, intenta de nuevo.");
        }
    }while(!options.includes(option));
}