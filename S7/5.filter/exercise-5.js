const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const uName = streamers.filter(streamer => {
    const nombre= streamer.name;

    const letrasNombre = [...nombre];

    if(letrasNombre.includes("u")){
        return {
            name: streamer.name,
            age: streamer.gameMorePlayed,
            gameMorePlayed: streamer.gameMorePlayed,
        }
    }
})

console.log(uName);