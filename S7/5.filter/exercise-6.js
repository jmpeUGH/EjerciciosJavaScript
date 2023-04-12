const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const legends = streamers.filter(streamer=> {

    const lol = [streamer.gameMorePlayed,streamer.age];

    //console.log(streamer.gameMorePlayed.toUpperCase());

    //console.log(lol[0].indexOf("Legends"));
    
        if(lol[0].indexOf("Legends") !==-1){
            if(lol[1]>35){
            return {
            name: streamer.name,
            age: streamer.age,
            gameMorePlayed: streamer.gameMorePlayed.toUpperCase(),
            }
            }
            else{
             return {
            name: streamer.name,
            age: streamer.age,
            gameMorePlayed: streamer.gameMorePlayed,
            }   
            }
            
         }
         
         
        
    
    
});


console.log(legends);