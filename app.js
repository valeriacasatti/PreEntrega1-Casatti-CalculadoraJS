confirm('Bienvenido a mi calculadora JavaScript😁');

let numero1 = parseFloat(prompt('Escribe el primer número:'));
let numero2 = parseFloat(prompt('Escribe el segundo número:'));
let operacion = prompt('Y ahora, elije un operador aritmético (+, -, *, /)');

function calculadora(numero1, numero2, operacion){
    switch (operacion){
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            return numero1 / numero2;
            break;
        default:
            return 0;
            break;
    }
}
alert("El resultado de tu operación es: " + calculadora(numero1, numero2, operacion));

let respuesta = confirm('Te gustaria volver a intentarlo?');

if(respuesta == false){
    alert('Gracias por jugar conmigo! Hasta la proxima😘');
}
else{
    location.reload();
}