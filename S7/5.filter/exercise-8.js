const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' }, { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' }, { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }, { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];

const input = (streamers) => {
    //console.log(streamers);
    const input$$ = document.querySelector("input");
    const boton$$ = document.querySelector("button");
    boton$$.addEventListener("click", () =>
        searchInput(streamers, input$$.value)
    );
    //console.log(input$$.value);
};
const searchInput = (streamer, filtro) => {

    //console.log(streamer);
    let arrFiltrado = streamer.filter((textoInput) =>
        textoInput.name.includes(filtro));

    console.log(arrFiltrado);

};

input(streamers);