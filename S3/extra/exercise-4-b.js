const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for(let i=0; i<=countries.length-1;i++){
    const newDiv$$ = document.createElement("div");
    document.body.appendChild(newDiv$$);

    newDiv$$.innerHTML=`<h4>${countries[i].title}</h4><img src="${countries[i].imgUrl}">`;

}

function removeLastDiv(){
    
    const allDiv$$ =document.querySelectorAll("div");

    let ultimoElemento = allDiv$$[allDiv$$.length-1];
    console.log(ultimoElemento);
    
    ultimoElemento.remove();  
}

const boton = document.querySelector("button");

boton.addEventListener("click",removeLastDiv);

