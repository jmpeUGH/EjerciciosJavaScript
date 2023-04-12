const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

console.log("Propiedades de alien:");

for (let propiedad in alien) {
    console.log(propiedad + ": " + alien[propiedad]);
}
