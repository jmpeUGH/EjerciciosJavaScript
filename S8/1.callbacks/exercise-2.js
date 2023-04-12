const userAnwsers = [];



function callbackPrint(){
    console.log(userAnwsers);
}

function confirmExample(description){
    window.confirm(`Esto es lo que has contestado: ${description}`);
    father(description, callbackPrint);
}

function promptExample(pregunta){
    let respuesta = window.prompt(pregunta);
    confirmExample(respuesta);
}

function father(respuesta, callback){
    userAnwsers.push(respuesta);
    callback(respuesta);
}


promptExample("Buenos días. ¿Cómo te llamas?");
promptExample("¿Cuántos años tienes?");
promptExample("¿Sabes programar?");
promptExample("Pues dale duro.");
