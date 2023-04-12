const Input$$ = document.querySelector("input");

function onFocus(event){
    console.log('Me acabas de activar mediante un "focus". Todavía estoy vacío')
}

Input$$.addEventListener("blur",onBlur);