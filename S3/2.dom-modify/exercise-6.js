const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const newUl$$=document.createElement("ul");


document.body.appendChild(newUl$$);

for(let i = 0; i <= apps.length-1;i++){
    const newLi$$=document.createElement("li");
    const texto = document.createTextNode(apps[i]);
    newLi$$.appendChild(texto);
    
    newUl$$.appendChild(newLi$$);
}