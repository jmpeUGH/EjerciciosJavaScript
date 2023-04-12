const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


const newUl$$=document.createElement("ul");


document.body.appendChild(newUl$$);

for(let i = 0; i <= countries.length-1;i++){
    const newLi$$=document.createElement("li");
    const texto = document.createTextNode(countries[i]);
    newLi$$.appendChild(texto);
    
    newUl$$.appendChild(newLi$$);
}