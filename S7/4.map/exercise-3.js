const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const visitedCities = cities.map(city => {
    if(city.isVisited){
        return {ciudad: city.name + " (Visitada)"};
    }
    else{
        return {ciudad: city.name};
    }
})

console.log(visitedCities);