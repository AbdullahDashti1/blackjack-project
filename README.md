# blackjack-project

User Stories:
- As a user, I want to see a welcome screen when I open the game to know it’s ready to play.
- As a user, I want to be dealt two cards at the start so that I can begin playing Blackjack.
- As a user, I want to click a “Hit” button to get another card so that I can try to improve my hand.
- As a user, I want to click a “Stand” button to end my turn so that the dealer can play.
- As a user, I want to see the dealer’s cards revealed so that I can know the game status.
- As a user, I want to see a message declaring who won so that I understand the result.
- As a user, I want to click a “Play Again” button to start a new game for another chance.

Psuedocode:
// Show welcome screen to the player
// Deal two cards to the player
// Deal two cards to the dealer
// Show player’s cards and one dealer card face-up

// While player wants to HIT
    // Deal one card to the player
    // Update player’s card total
// End While
// Reveal dealer’s hidden card
// While dealer’s card total is less than 17
    // Deal one card to the dealer
    // Update dealer’s card total
// End While

// COMPARE player’s and dealer’s totals
// IF player’s total is greater than dealer’s total AND less than or equal to 21
    // Show message that player wins
// ELSE IF dealer’s total is greater than player’s total AND less than or equal to 21
    // Show message that dealer wins
// ELSE
    // Show message for a tie or bust
    
// Ask player if they want to play again
