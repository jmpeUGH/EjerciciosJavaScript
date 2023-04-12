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
    //console.log("https://api.nationalize.io?name=" + nombre);

    const response = await fetch("https://api.nationalize.io?name=" + nombre);
    const resp = await response.json();
    return resp;
}




const inicio = async () => {

    const objetoResp = await obtenerObjeto(inputName$$.value);
    console.log(objetoResp);


    //console.log(objetoResp.country[0].country_id);
    for (objeto of objetoResp.country) {
        console.log(objetoResp.country)
        console.log(objeto)
        //console.log(objeto.country_id)
        const p$$ = document.createElement("p");
        const contDiv$$ = document.createElement("div");
        p$$.textContent = `El nombre ${objetoResp.name} tiene un ${objeto.probability * 100} por ciento de ser de ${objeto.country_id}`;
        const delBtn$$ = document.createElement("button");
        delBtn$$.textContent = "Borrar";
        delBtn$$.addEventListener("click", (event) => {
            const elemABorrar = event.target.parentElement;
            contDiv$$.remove(elemABorrar);
        })
        //console.log(p$$);
        contDiv$$.appendChild(p$$);
        contDiv$$.appendChild(delBtn$$);
        document.body.appendChild(contDiv$$);
    }
}
botonAgregar$$.addEventListener("click", inicio)
//inicio()