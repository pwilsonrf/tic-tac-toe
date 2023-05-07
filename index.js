
//Assumptions
//Player1 in object below always starts the game


//New Gameboard Object
const Gameboard = (name1, name2) =>{

    //Initialize gameboard
    let gameboardArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let gameboardSequence = [];

    const player1 = Player(name1);
    const player2 = Player(name2);

    //A player plays
    const playerPlays = (mark, position, player) => {
        gameboardArr[position] = mark;
        gameboardSequence.push(`${player.name},${position},${mark}`)
        if (player.name === player1.name){
            player1.playerCount += 1;} //Player 1 plays
        else {
            player2.playerCount += 1; //Player 2 plays
        }
    }

  




    return {player1, player2, playerPlays, gameboardArr, gameboardSequence}


    

    // const whoIsNext = (playerName1, playerName2) =>{
    //     if(playerCount2 <= playercount1){
    //         return (playerName1)
    //     } else {
    //         return (playerName2)
    //     }
    // }


    



}

//A Player Plays



//Player object
const Player = (playerName1) =>{

    //Create player object
    const name = playerName1;
    let playerCount = 0;
    return {name, playerCount}
}



const jose = Player("jose");
const john  = Player("john");


const newGame = Gameboard("jose", "john");
console.log(newGame)




console.log(newGame.playerPlays("X", 4, jose));
console.log(newGame.playerPlays("X", 2, john));
console.log(newGame.playerPlays("O", 3, john));
console.log(newGame.playerPlays("O", 5, jose));