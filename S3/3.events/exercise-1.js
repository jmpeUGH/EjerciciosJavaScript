document.body.innerHTML='<button type="submit" id ="btnToClick">dale click hasta que te canses</button>'

const boton=document.querySelector("button");
boton.addEventListener("click", (event) => console.log(boton.innerText));