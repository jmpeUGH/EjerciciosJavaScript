const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const newUl$$=document.createElement("ul");

const miDiv$$=document.querySelector("div");

miDiv$$.appendChild(newUl$$);

for(let i=0; i<=cars.length-1;i++){
    const newLi$$ = document.createElement("li");
    const addText = document.createTextNode(cars[i]);

    newLi$$.appendChild(addText);

    newUl$$.appendChild(newLi$$);
}
