const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const boton = document.querySelector("button");

boton.classList.add("btnRemoveLast");

//console.log(boton);

const btnRemoveLast = document.querySelector(".btnRemoveLast");

console.log(btnRemoveLast);

btnRemoveLast.addEventListener("click",removeLastDiv);

for(let i=0; i<=countries.length-1;i++){
    const newDiv$$ = document.createElement("div");
    document.body.appendChild(newDiv$$);

    newDiv$$.innerHTML=`<h4>${countries[i].title}</h4><img src="${countries[i].imgUrl}"><button class="botonDiv" id="${i}">Remove Element${i}</button>`;

}

function removeLastDiv(){
    
    const allDiv$$ =document.querySelectorAll("div");

    let ultimoElemento = allDiv$$[allDiv$$.length-1];
    console.log(ultimoElemento);
    
    ultimoElemento.remove();  
}



// boton.addEventListener("click",removeLastDiv);

const actualBoton = document.querySelectorAll(".botonDiv");

//console.log(actualBoton);
// const divActual = actualBoton.parentNode;
//console.log(divActual);
//actualBoton[0].addEventListener("click",btnSelect());
// actualBoton[1].addEventListener("click",removeThisElement);
// actualBoton[2].addEventListener("click",removeThisElement);
// actualBoton[3].addEventListener("click",removeThisElement);
// actualBoton[4].addEventListener("click",removeThisElement);

//console.log(actualBoton)

console.log(actualBoton.id);

// function devolverIndice(){
//     console.log(actualBoton.index);
// }



// function removeThisElement(boton) {
//     const divActual = boton.parentNode;
//     console.log(divActual);
//     //divActual.remove();
// }

// for(let i=0; i<=actualBoton.length-1;i++){
//     //console.log(actualBoton[i]);
//     //actualBoton[i].addEventListener("click",removeThisElement);
// }

// function btnSeleccionado(){
//     for(let i=0; i<=actualBoton.length-1;i++){
//              console.log(actualBoton[i]);
//              //actualBoton[i].addEventListener("click",removeThisElement);
//         }
// }