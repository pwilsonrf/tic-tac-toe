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
const Gameboard = () =>{


    //Initialize gameboard
    let gameboardArr = ["", "", "", "", "", "", "", "", ""];
    let gameboardArrPlayer = ["", "", "", "", "", "", "", "", ""];
    let playerCounter = 0; //Number of times that has been played
    let endOfGame = 0;
    let newPlayer1 = Player("Player 1", "X");
    let newPlayer2 = Player("Player 2", "O");
    let currentPlayer = newPlayer1;

    //Grab players
    let player1Button = document.querySelector(".player-button-1");
    console.log(player1Button)
    let player1Input = "";
    
    console.log(player1Input)
    player1Button.addEventListener("click", () =>{
        console.log(document.querySelector("#player1-input").value);
        newPlayer1.name = document.querySelector("#player1-input").value;
        // newPlayer1 = Player(player1Input.innerText, "X");
        currentPlayer = newPlayer1;
        console.log(`${currentPlayer.name} after Enter`)

        
    });

    let player2Button = document.querySelector(".player-button-2");
    let player2Input = document.querySelector("#player2-input");
    player2Button.addEventListener("click", () =>{
        newPlayer2 = Player(player2Input.value, "O");
        console.log(newPlayer2);
        return{newPlayer2}
        
    });

    console.log(newPlayer1)
    console.log(newPlayer2)

    // let player1Buttontest = document.querySelector("#player1");
    // player1Buttontest.addEventListener("click", () =>{
    //     document.querySelector("#player1").addEventListener("input", (e) =>{
    //         console.log(e.target.value)
            
    //     })});

    

    //Current players
   
    
   
    console.log(currentPlayer)
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
                console.log(player)
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
        if(currentPlayer.name == newPlayer1.name){
            previousPlayer = newPlayer1;
            currentPlayer = newPlayer2;
            console.log(currentPlayer.name, currentPlayer.playerSymbol);
        } else {
            currentPlayer = newPlayer1;
            previousPlayer = newPlayer2;
            console.log(currentPlayer.name, currentPlayer.playerSymbol)
        }

        console.log(`this is ${previousPlayer.name}`);
    }

    //Click event on Board
    const card1 = document.querySelectorAll(".card"); //Grab all cards
    card1.forEach(el => el.addEventListener("click", handleClick, false));
    function handleClick(e){
        playerPlays(currentPlayer, e.target.id.slice(4));
        console.log(currentPlayer)
    }
    
    //Check if Game is Over
    const gameOver = () =>{
        console.log(`game over ${previousPlayer.name}`)
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

        currentPlayer = newPlayer1;

        //Reinitialize cards
        cards = document.querySelectorAll(".card");
        cards.forEach(el => el.innerText = "");

        //Reinitialize results display
        document.querySelector(".display-result-container").innerText = "";
        endOfGame = 0;
    }
        

    // const card1 = document.querySelectorAll(".card"); //Grab all cards
    // card1.forEach(el => el.addEventListener("click", handleClick, false));
    // function handleClick(e){
    //     playerPlays(currentPlayer, e.target.id.slice(4));
    // }
        


            
            
        
    

    return {newPlayer1, newPlayer2, playerPlays, gameboardArr, gameOver, displayGame, togglePlayer}

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


