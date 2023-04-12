const numbersList = [];

let a =0;
let b =0;

const callbackPrint = (arrNumberList) => {
    console.log(arrNumberList);
}

function sum(a, b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function father(a, b, callback) {
    let result;
    if(a >= b){
        result = substract(a,b);
    }else{
        result = sum(a,b);
    }
    numbersList.push(result);
    callback(numbersList);
        
}

father(1,1,callbackPrint);
father(1,5,callbackPrint);
father(1,2,callbackPrint);
father(2,1,callbackPrint);
father(3,1,callbackPrint);
father(1,4,callbackPrint);

