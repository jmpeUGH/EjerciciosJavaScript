const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

let {name, itv} = car;

console.log(car);

const inspecciones = {
    itv1: "itv1",
    itv2: "itv2",
    itv3: "itv3",
}

for(let i=0; i<= car.itv.length-1;i++){
    let inspecc = "itv"+(i+1);
    inspecciones[inspecc]=car.itv[i];
}

let {itv1,itv2,itv3} = inspecciones;

console.log(inspecciones);