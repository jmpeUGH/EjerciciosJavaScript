const baseUrl = 'https://api.nationalize.io?name=';

const inputName$$ = document.querySelector("input");
//console.log(inputPais$$);
const botonAgregar$$ = document.querySelector("button");
//console.log(botonAgregar$$);
const arr = [];


//botonAgregar$$.addEventListener("click", agregarPais(inputPais$$.textContent));

const takeInputName = () => {
    
    //console.log(inputName$$);
    //console.log(inputName$$.value);
    //return inputName$$.value;
    //botonAgregar$$.addEventListener("click", () =>
//     obtenerObjeto(inputName$$));
   
  };

//takeInputName();

const obtenerObjeto = async (nombre) => {
    console.log("https://api.nationalize.io?name=" + nombre);

    const response = await fetch("https://api.nationalize.io?name=" + nombre);
    const resp = await response.json();
    return resp;
}




const inicio = async () => {

    

    const objetoResp = await obtenerObjeto(inputName$$.value);
    console.log(objetoResp);

    
}
botonAgregar$$.addEventListener("click", inicio)
//inicio()






