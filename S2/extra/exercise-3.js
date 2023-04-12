const users = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },
        }
    },
];


// Creo un array donde están incluidos todos los sonidos
const sonidosTodos = [];

for (let usuario of users) {
    for (let key in usuario.favoritesSounds) {
        sonidosTodos.push(key);
    }
}

console.log(sonidosTodos);

// Creo un array sounds en el que agregaré los sonidos de sonidosTodos una vez
// Para ello, tengo que 

//const sounds = [];

// Para que no esté vacío, le añado el primer sonido de sonidosTodos

const sounds =[];

console.log("length" + sounds.length);


// for (let i = 0; i <= sonidosTodos.lenght - 1; i++) {
//     const sounds = [];
//     console.log(sounds.includes(sonidosTodos[0]));
// //     if (sounds.includes(sonidosTodos[i]) == false) {
// //         sounds.push(sonidosTodos[i]);
// //     }
// }



// let n= 0;


// do{
//     //console.log(sonidosTodos[n]);
//     for(i=0;i<=sounds.length-1;i++){
//         if(sonidosTodos[n] !== sounds[i]){
//             console.log(sonidosTodos[n]);
//             //console.log(sounds[i]);
//             sounds.push(sonidosTodos[n])
//         }
//     }

//     n++;
// }while(n<=sonidosTodos.length-1)
// for (let i=0; i<=sonidosTodos.length-1;i++){
    
//     for(let j=0; j<=sounds.length-1;j++){
//         if(sonidosTodos[i] != sounds[j]){
//             sounds.push(sonidosTodos[i]);
//         }
//     }
// }


// console.log("sounds");
// console.log(sounds);
// for (let key in usuario.favoritesSounds) {
//     sonidosTodos.push(key);
// }

// let soundsVeces = [];
// for (let i = 0; i <= sounds.length - 1; i++) {
//     console.log(sounds[i]);
//     for (let j = 0; j <= sonidosTodos.lenght - 1; j++) {
//         console.log(sonidosTodos[j]);
//         if (sounds[i] !== sonidosTodos[j]) {

//         } else {
//             sounds.push(sonidosTodos[j]);
//         }
//     }
// }

// console.log(sonidosTodos);

// // console.log(sounds);





// console.log("sonidosTodos:")
// console.log(sonidosTodos);

// for (let key of sounds) {
    
//     for (let key2 of sonidosTodos) {
//         // console.log(key2.nombre);
//         // console.log(key.nombre);
//         if (key.nombre !== key2.nombre) {
//             sounds.push({nombre: key2.nombre, veces: 1})
//         }else{
//             key.veces += 1;
//         }
//         // console.log(sonidosTodos[key2].nombre);
//         // console.log(sonidosTodos[key2].veces);
//     }
// }

// for (let i = 0; i <= sonidosTodos.lenght - 1; i++) {

//     if (sounds.includes(sonidosTodos[i])===false) {
//         sounds.push(sonidosTodos[i]);
//     }
// }

// console.log(sounds);