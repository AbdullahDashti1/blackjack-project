# blackjack-project

<img width="1637" height="766" alt="image" src="https://github.com/user-attachments/assets/81ece536-b52b-46aa-b5e7-6188f47073bc" />

## Blackjack game:

Blackjack is a common playing card game that is played by millions and millions of users, specifically known for its prescence in the Casino. It is commonly known as a gambling game, but can be played without betting, and its core focus is it to win over the dealer by the score player has, and the determinent of the score are the weighting of the cards. 

## Selection of Blackjack:

The reason why I choose this game specifically is because it fits in my interest as I was once very attached to card games and playing magic with it. I also chose this game because I wanted to challenge my coding understanding and try something very heavy with heavy logic and designing. 

## Game Link:

https://abdullahdashti1.github.io/blackjack-project/

## Tools:
HTML, CSS, Javascript, 52 Playing Card Images.

## Future Enhancements:
For the future as I gain more insights and delve into programming, I may use the opprtunity to make 4 players as realistic, improve the designing of the game, as well as narrow the chunk of code for readability purposes. 

## User Stories:

- As a user, I want to see a welcome screen when I open the game to know it’s ready to play.
- As a user, I want to be dealt two cards at the start so that I can begin playing Blackjack.
- As a user, I want to click a “Hit” button to get another card so that I can try to improve my hand.
- As a user, I want to click a “Stand” button to end my turn so that the dealer can play.
- As a user, I want to see the dealer’s cards revealed so that I can know the game status.
- As a user, I want to see a message declaring who won so that I understand the result.
- As a user, I want to click a “Play Again” button to start a new game for another chance.

## Psuedocode:

// Define card suits and ranks constants
// Define variables: deck, playerHand, dealerHand, playerScore, dealerScore, gameMessage, gameState

// Select player's cards display element
// Select dealer's cards display element
// Select player's score display element
// Select dealer's score display element
// Select game message display element
// Select buttons: Hit, Stand, Play Again

// Add event listener to Hit button
// Add event listener to Stand button
// Add event listener to Play Again button

// Create and shuffle deck
// Reset playerHand and dealerHand to empty arrays
// Deal 2 cards to playerHand
// Deal 2 cards to dealerHand (one face down)
// Calculate initial scores
// Set gameState to 'playerTurn'
// Render the initial game state

// On Hit button click:
//   Deal 1 card to playerHand
//   Update playerScore
//   If playerScore > 21:
//      Set gameMessage to "Player loses! Dealer wins."
//      Set gameState to 'gameOver'
//   Render updated state

// On Stand button click:
//   Set gameState to 'dealerTurn'
//   Reveal dealer's hidden card
//   While dealerScore < 17:
//      Deal 1 card to dealerHand
//      Update dealerScore
//   Compare scores:
//      If dealerScore > 21 or playerScore > dealerScore:
//          Player wins
//      Else if dealerScore > playerScore:
//          Dealer wins
//      Else:
//          It's a tie
//   Set gameMessage accordingly
//   Set gameState to 'gameOver'
//   Render updated state

// Display player and dealer cards and scores
// Show/hide face-down dealer card as appropriate
// Display gameMessage
// Show or hide Hit and Stand buttons based on gameState

// On Play Again click:
//   Reset all variables
//   Call init function to start a new game
