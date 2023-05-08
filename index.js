
//Assumptions
//Player1 in object below always starts the game


//Player object
const Player = (playerName, symbol) =>{

    //Create player object
    const name = playerName;
    let playerSymbol = symbol;
    return {name, playerSymbol}
}

//New Gameboard Object
const Gameboard = (name1, name2) =>{

    //Initialize gameboard
    let gameboardArr = ["O", "O", "X", "X", "X", "X", "X", "X", "O"];
    
    let gameboardSequence = [];

    const player1 = name1;
    const player2 = name2;

    const displayGame = (card) =>{
        let gameDisplay = document.querySelector(".card-container");
        for (i = 0; i < gameboardArr.length; i++){
            let gameCard = document.createElement("div");
            gameCard.id = `card${i}`;
            gameCard.className = "card";
            gameCard.innerText = gameboardArr[i];
            gameDisplay.appendChild(gameCard);
        }
    }
    displayGame()


    
    

    //A player plays
    const playerPlays =  (player, position) => {
        gameboardArr[position] = player.playerSymbol;
        console.log(gameboardArr);
        console.log(`card${position}`)
        let card = document.getElementById(`card${position}`);
        card.innerText = player.playerSymbol;


        // if(player == player1){
        //     let currentPlayer = player2;
        // } else {
        //     let currentPlayer = player1;
        // }
        // return {currentPlayer}
       
        
    }


    

    const gameOver = (player) =>{
        console.log(gameboardArr.length)

        //Check for rows
        for(i = 0; i < gameboardArr.length; i+=3){
            //Check rows
            if(gameboardArr[i] === gameboardArr[i+1] && gameboardArr[i+1] === gameboardArr[i+2]){
            console.log("hello world1")
            } 
        }

        //check for columns
        for(i = 0; i < 3; i++){
            //Check columns
            if(gameboardArr[i] === gameboardArr[i+3] && gameboardArr[i+3] === gameboardArr[i+6]){
            console.log("hello world2")
            }
        }

        //check diagonals
        ////Check top-left to bottom-right diagonals
        if(gameboardArr[0] === gameboardArr[4] && gameboardArr[4] === gameboardArr[8]){
           console.log("hello world3")
        }

        ////Check top-right to bottom-left diagonals
        if(gameboardArr[2] === gameboardArr[4] && gameboardArr[4] === gameboardArr[6]){
            console.log("hello world4")
         }
    }

    
        


            
            
        
    

    return {player1, player2, playerPlays, gameboardArr, gameboardSequence, gameOver, displayGame}

    // const whoIsNext = (playerName1, playerName2) =>{
    //     if(playerCount2 <= playercount1){
    //         return (playerName1)
    //     } else {
    //         return (playerName2)
    //     }
    // }
}

//On-click event for player's play
const card1 = document.getElementById("card2");
console.log(card1)

if (card1){

card1.addEventListener("click", buttonPressed);
console.log(card1)

}

const buttonPressed = (e) => {
    console.log(e.target);
}

//On-Click Event for Player

//A Player Plays




const jose = Player("jose", "G");
const john  = Player("john", "O");
const newGame = Gameboard(jose, john);

console.log(newGame);
// console.log(newGame.playerPlays("X", 4, jose));
// console.log(newGame.playerPlays("X", 2, john));
// console.log(newGame.playerPlays("O", 3, john));
// console.log(newGame.playerPlays("O", 5, jose));

newGame.playerPlays(jose, 8);
newGame.playerPlays(john, 3);