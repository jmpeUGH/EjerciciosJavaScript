const prompt = require("prompt-sync")();


let random;

function rollDice(){
    return random = Math.floor(Math.random() * (7 - 1) + 1);
}

do {

    console.log(rollDice());
    
    respuesta = prompt("¿Quieres continuar?", "Si");

    quiereContinuar = respuesta == "Si" ? true : false;

} while (quiereContinuar);