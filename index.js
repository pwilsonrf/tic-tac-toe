
/*
    Player object with name and symbol properties
    Args:
        playerName: Name of player
        symbol: Chosen player symbol
*/
const Player = (playerName, symbol) => {
   const name = playerName;
   let playerSymbol = symbol;
   return { name, playerSymbol };
};

/*
    Gameboard object containing all game related functions
*/
const Gameboard = () => {
   //Initialize gameboard
   let gameboardArr = ["", "", "", "", "", "", "", "", ""];
   let gameboardArrPlayer = ["", "", "", "", "", "", "", "", ""];
   let playCounter = 0;
   let endOfGame = 0;
   let newPlayer1 = Player("Player 1", "X");
   let newPlayer2 = Player("Player 2", "O");
   let currentPlayer = newPlayer1;
   let previousPlayer = "";
   let player1Input = "";

   //Take player inputs from Gameboard
   let player1Button = document.querySelector(".player-button-1");
   player1Input = document.querySelector("#player1-input");
   player1Button.addEventListener("click", () => {
      newPlayer1.name = player1Input.value;
      currentPlayer = newPlayer1;
   });

   let player2Button = document.querySelector(".player-button-2");
   let player2Input = document.querySelector("#player2-input");
   player2Button.addEventListener("click", () => {
      newPlayer2 = Player(player2Input.value, "O");
   });

   /*
    Render all of the gameboard cards
    */
   const displayGame = () => {
      let gameDisplay = document.querySelector(".card-container");
      for (i = 0; i < gameboardArr.length; i++) {
         let gameCard = document.createElement("div");
         gameCard.id = `card${i}`;
         gameCard.className = "card";
         gameCard.innerText = gameboardArr[i];
         gameDisplay.appendChild(gameCard);
      }
   };
   displayGame();

   /*
    When a player plays, display their symbol, toggle player and check if game is over
    Args: 
        player: Player object representing a player
        position: Card ID at which they play on gameboard
    */
   const playTurn = (player, position) => {
      let card = document.getElementById(`card${position}`);
      if (endOfGame == 1) {
         alert(`End of Game. Start a New Game`);
      } else {
         if (card.innerText == "" && endOfGame == 0) {
            gameboardArr[position] = player.playerSymbol;
            gameboardArrPlayer[position] = player.name;
            card.innerText = player.playerSymbol;
            playCounter++;
            togglePlayer();
            checkGameOver();
         } else {
            alert(
               `${gameboardArrPlayer[position]} has already played on this spot. Try a new spot`
            );
         }
      }
   };

   /*
    When a player plays, switch current player and assign previous player
    */
   const togglePlayer = () => {
      if (currentPlayer.name == newPlayer1.name) {
         previousPlayer = newPlayer1;
         currentPlayer = newPlayer2;
      } else {
         currentPlayer = newPlayer1;
         previousPlayer = newPlayer2;
      }
   };

   /*
    Grab card ID at which a player plays
    */
   function handleClick(e) {
      playTurn(currentPlayer, e.target.id.slice(4));
   }

   //Click event on Board
   const card1 = document.querySelectorAll(".card"); //Grab all cards
   card1.forEach((el) => el.addEventListener("click", handleClick, false));

   /*
    Check if the game is over based on winning patterns for a 3x3 tic-tac-toe game. 
    The check is done on the player's symbol and checking is the symbol is the same within a pattern (e.g. diagonal X's)
    */
   const checkGameOver = () => {
      if (playCounter < 5) {
         return;
      }
      //Horizontal winning pattern
      for (i = 0; i < gameboardArr.length; i += 3) {
         if (
            gameboardArr[i] === gameboardArr[i + 1] &&
            gameboardArr[i + 1] === gameboardArr[i + 2] &&
            gameboardArr[i] != ""
         ) {
            document.querySelector(
               ".display-result-container"
            ).innerText = `Game Over. ${previousPlayer.name} wins!`;
            playCounter = 0;
            endOfGame = 1;
         }
      }

      //Vertical winning pattern
      for (i = 0; i < 3; i++) {
         //Check columns
         if (
            gameboardArr[i] === gameboardArr[i + 3] &&
            gameboardArr[i + 3] === gameboardArr[i + 6] &&
            gameboardArr[i] != ""
         ) {
            document.querySelector(
               ".display-result-container"
            ).innerText = `Game Over. ${previousPlayer.name} wins!`;
            playCounter = 0;
            endOfGame = 1;
         }
      }

      //Diagonal winning pattern, check top-left to bottom-right diagonals
      if (
         gameboardArr[0] === gameboardArr[4] &&
         gameboardArr[4] === gameboardArr[8]
      ) {
         document.querySelector(
            ".display-result-container"
         ).innerText = `Game Over. ${previousPlayer.name} wins!`;
         playCounter = 0;
         endOfGame = 1;
      }

      //Diagonal winning pattern, check top-right to bottom-left diagonals
      if (
         gameboardArr[2] === gameboardArr[4] &&
         gameboardArr[4] === gameboardArr[6]
      ) {
         document.querySelector(
            ".display-result-container"
         ).innerText = `Game Over. ${previousPlayer.name} wins!`;
         playCounter = 0;
         endOfGame = 1;
      }

      if (playCounter === 9 && endOfGame === 0) {
         document.querySelector(
            ".display-result-container"
         ).innerText = `There is a tie! Start new Game!`;
         playCounter = 0;
         endOfGame = 1;
      }
   };

   //Add event listener for buttons to trigger a new game
   let buttonStartGame = document.querySelectorAll("button");
   buttonStartGame.forEach((el) =>
      el.addEventListener("click", newGame, false)
   );

   //Start a new game once game is over, or buttons are pressed
   function newGame() {
      //Initialize gameboard
      gameboardArr = ["", "", "", "", "", "", "", "", ""];
      gameboardArrPlayer = ["", "", "", "", "", "", "", "", ""];
      playCounter = 0;
      currentPlayer = newPlayer1;

      //Reinitialize cards
      cards = document.querySelectorAll(".card");
      cards.forEach((el) => (el.innerText = ""));

      //Reinitialize results display
      document.querySelector(".display-result-container").innerText = "";
      endOfGame = 0;
   }
};
const newGame = Gameboard();
