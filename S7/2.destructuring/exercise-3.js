const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const animal = {
    nombre: "nombre",
    raza: "raza",
}

let {nombre, raza} = animal;

console.log(animalFunction(animal));