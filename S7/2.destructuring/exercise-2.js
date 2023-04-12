const fruits = ['Banana', 'Strawberry', 'Orange'];

const frutas = {};

for(let i=1; i<=fruits.length;i++){
    let fruta = "fruit" + i;

    frutas[fruta]=fruits[i-1];
    //console.log(fruta);
}

let {fruit1,fruit2,fruit3}= frutas;

console.log(frutas);