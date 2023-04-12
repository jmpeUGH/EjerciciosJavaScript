"use script";

const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 41, name: 'El gato felix'}];

let gatos=[];



for(let juguete of toys){
    if(juguete.name.includes("gato")){
        gatos.push(juguete);
    }
}

for(let i=0; i<=toys.length-1;i++){
    for(let j=0; j<= gatos.length-1;j++){
        if(toys[i].name===gatos[j].name){
            toys.splice(i,1);
        }
    }
}

console.log(toys);
console.log(gatos);
