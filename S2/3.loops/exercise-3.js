const placesToTravel = [{ id: 5, name: 'Japan' }, { id: 11, name: 'Venecia' }, { id: 23, name: 'Murcia' }, { id: 40, name: 'Santander' }, { id: 44, name: 'Filipinas' }, { id: 59, name: 'Madagascar' }];

let placesEliminados = [];
for (let i = 0; i <= placesToTravel.length - 1; i++) {
    if (placesToTravel[i].id == 11 || placesToTravel[i].id == 40) {
        placesEliminados.push(placesToTravel[i]);
        placesToTravel.splice(i, 1);
    }
}

console.log("Eliminados:")
console.log(placesEliminados);
console.log("Por visitar:")
console.log(placesToTravel);