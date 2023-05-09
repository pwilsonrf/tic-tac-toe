
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
    let gameboardArr = ["", "", "", "", "", "", "", "", ""];
    let gameboardArrPlayer = ["", "", "", "", "", "", "", "", ""];
    let playerCounter = 0; //Number of times that has been played
    let endOfGame = 0;

    //Grab players
    const grabPlayer = () =>{
        let players = document.querySelectorAll(".players");
        players.forEach(el => el.addEventListener("click", (e) =>{
            player1 = Player(e.innerText);
            player2 = Player(e.innerText);
        }))
    }

    //Current players
    const player1 = name1;
    const player2 = name2;
    let currentPlayer = player1;
    let previousPlayer = "";

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
        let card = document.getElementById(`card${position}`);
        if (endOfGame ==1){
            alert(`End of Game. Start a New Game`);
        } else {
            if (card.innerText == "" && endOfGame == 0){
                //Update symbol, player name and toggle playuer
                gameboardArr[position] = player.playerSymbol;
                gameboardArrPlayer[position] = player.name;
                card.innerText = player.playerSymbol;
                playerCounter++;
               
    
                //Toggle player
                togglePlayer();
                
                //Check if game is over
                gameOver();
                
            } else {
                alert(`${gameboardArrPlayer[position]} has already played on this spot. Try a new spot`);
            }
        }
    }

    //Toggle player
    const togglePlayer = () =>{
        console.log("it's running")
        //Toggle player
        if(currentPlayer.name == player1.name){
            previousPlayer = player1;
            currentPlayer = player2;
            console.log(currentPlayer.name, currentPlayer.playerSymbol);
        } else {
            currentPlayer = player1;
            previousPlayer = player2;
            console.log(currentPlayer.name, currentPlayer.playerSymbol)
        }
    }

    //Click event on Board
    const card1 = document.querySelectorAll(".card"); //Grab all cards
    card1.forEach(el => el.addEventListener("click", handleClick, false));
    function handleClick(e){
        playerPlays(currentPlayer, e.target.id.slice(4));
    }
    
    //Check if Game is Over
    const gameOver = () =>{

        if (playerCounter == 9){
            console.log(playerCounter);
            document.querySelector(".display-result-container").innerText = `There is a tie! Start new Game!`;
            playerCounter = 0;
        }

        //For a player to win, there must be at least 5 plays
        if (playerCounter >=5){
            for(i = 0; i < gameboardArr.length; i+=3){
                //Check rows
                if(gameboardArr[i] === gameboardArr[i+1] && gameboardArr[i+1] === gameboardArr[i+2] && gameboardArr[i] != ""){
                document.querySelector(".display-result-container").innerText = `Game Over. ${previousPlayer.name} wins!`;
                console.log("#1")
                playerCounter = 0;
                endOfGame = 1;
                } 
            } 
    
            //check for columns
            for(i = 0; i < 3; i++){
                //Check columns
                if(gameboardArr[i] === gameboardArr[i+3] && gameboardArr[i+3] === gameboardArr[i+6] && gameboardArr[i] != ""){
                    document.querySelector(".display-result-container").innerText = `Game Over. ${previousPlayer.name} wins!`;
                    console.log("#2")
                    playerCounter = 0;
                    endOfGame = 1;
                }
            }
    
            //check diagonals
            ////Check top-left to bottom-right diagonals
            if(gameboardArr[0] === gameboardArr[4] && gameboardArr[4] === gameboardArr[8]){
                document.querySelector(".display-result-container").innerText = `Game Over. ${previousPlayer.name} wins!`;
                console.log("#3")
                playerCounter = 0;
                endOfGame = 1;
            }
    
            ////Check top-right to bottom-left diagonals
            if(gameboardArr[2] === gameboardArr[4] && gameboardArr[4] === gameboardArr[6]){
                document.querySelector(".display-result-container").innerText = `Game Over. ${previousPlayer.name} wins!`;
                console.log("#4")
                playerCounter = 0;
                endOfGame = 1;
             }
        }

       

    }


    


    //Delete gameboard data
   
    

    //Start New Game
    let buttonStartGame = document.querySelectorAll("button");
    buttonStartGame.forEach(el => el.addEventListener("click", newGame, false));
    console.log(buttonStartGame)


    function newGame () {
        //Initialize gameboard
        gameboardArr = ["", "", "", "", "", "", "", "", ""];
        gameboardArrPlayer = ["", "", "", "", "", "", "", "", ""];
        playerCounter = 0; //Number of times that has been played
        console.log(gameboardArr)
        cards = document.querySelectorAll(".card");
        cards.forEach(el => el.innerText = "");
        endOfGame = 0;
    }
        

    // const card1 = document.querySelectorAll(".card"); //Grab all cards
    // card1.forEach(el => el.addEventListener("click", handleClick, false));
    // function handleClick(e){
    //     playerPlays(currentPlayer, e.target.id.slice(4));
    // }
        


            
            
        
    

    return {player1, player2, playerPlays, gameboardArr, gameOver, displayGame, togglePlayer}

    // const whoIsNext = (playerName1, playerName2) =>{
    //     if(playerCount2 <= playercount1){
    //         return (playerName1)
    //     } else {
    //         return (playerName2)
    //     }
    // }
}


//On-Click Event for Player

//A Player Plays






const jose = Player("X", "X");
const john  = Player("O", "O");
const newGame = Gameboard(jose, john);

console.log(newGame);
// console.log(newGame.playerPlays("X", 4, jose));
// console.log(newGame.playerPlays("X", 2, john));
// console.log(newGame.playerPlays("O", 3, john));
// console.log(newGame.playerPlays("O", 5, jose));

// newGame.playerPlays(jose, 8);
// newGame.playerPlays(john, 3);


