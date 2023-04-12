const Input$$ = document.querySelector("input");

function onBlur(event){
    if(event.target.value===""){
        console.log("he salido del input y no has escrito nada")
    }else{
        console.log(`Esto es lo que has escrito: ${event.target.value}`);
    }
}

Input$$.addEventListener("blur",onBlur);