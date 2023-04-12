const sumaDos = (a,b) => {
    if(!a && !b){
        
        return "Por favor incluye algún parámetro";
    }else if(!b){
        return a;
    }else{
        return a+b;
    }

}

console.log(sumaDos());
console.log(sumaDos(10));
console.log(sumaDos(10,5));
