const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const usersNames = users.map(user => {
    const elNombre = user.name;
    //console.log(elNombre);
    
    const letrasNombre = [...elNombre];
    //console.log(letrasNombre);

    if(letrasNombre[0]==="A"){
        return {nombre: "Anacleto"};
    }
    else{
        return {nombre: user.name};
    }
    
})

console.log(usersNames);