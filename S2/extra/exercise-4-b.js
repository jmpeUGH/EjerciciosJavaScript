let miArray=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];


function findArrayIndex(matriz,text) {
    return matriz.indexOf(text);
}

function removeItem(matriz2,item){
    return matriz2.splice(item,1);
}

removeItem(miArray,findArrayIndex(miArray,"Mosquito"));

console.log(miArray);