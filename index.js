
//Assumptions
//Player1 in object below always starts the game


//New Gameboard Object
const Gameboard = (playerName1, playerName2) =>{

    //Initialize gameboard
    let gameboardArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    //Create player object
    const playerName = (player) => {
        return {
            name: player,
            playerCount: 0
        }
    }

    //Create two players
    let player1 = playerName(playerName1);
    let player2 = playerName(playerName2);

   


    const playerPlays = (mark, position, player) => {
        gameboardArr[position] = mark;

        if (player === playerName1){
            playerName1.playerCount += 1;} //Player 1 plays
        else {
            playerName2.playerCount += 1; //Player 2 plays
        }

    }

    const whoIsNext = (playerName1, playerName2) =>{
        if(playerCount2 <= playercount1){
            return (playerName1)
        } else {
            return (playerName2)
        }
    }

    return {player1, player2, gameboardArr, playerPlays}

    

    //A Play




}

console.log(Gameboard("jose", "john"));
console.log(Gameboard.playerPlays("X", 4, "jose"));
