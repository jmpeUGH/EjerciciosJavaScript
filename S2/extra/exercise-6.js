let miArray=['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(matriz,index1,index2){

    let item1=matriz[index1];
    let item2=matriz[index2];

    console.log(item1);
    console.log(item2);

    matriz.splice(index1,1,item2);

    matriz.splice(index2,1,item1);

    return console.log(matriz);

}

swap(miArray,1,3);