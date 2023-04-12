let miArray=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];


function findArrayIndex(matriz,text) {
    return matriz.indexOf(text);
}

for(let i=0; i<= miArray.length-1;i++){

    console.log(findArrayIndex(miArray,miArray[i]));
}