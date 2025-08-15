/*-------------------------------- Constants --------------------------------*/

const cardSuits = ['♠', '♥', '♦', '♣'];
const cardRanks = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

/*---------------------------- Variables (state) ----------------------------*/

let deck = [];
let playerHand;
let dealerHand;
let playerScore;
let dealerScore;
let gameMessage;
let gameState;

/*------------------------ Cached Element References ------------------------*/

// const playerCardEl = document.addEventListener('#player-card');
// const dealerCardEl = document.addEventListener('#dealer-card');
// const playerScoreEl = document.addEventListener('player-score');
// const dealerScoreEl = document.addEventListener('dealer-score');
// const gameMessageEl = document.addEventListener('game-message');
// const hitEl = document.addEventListener('hit');
// const standEl = document.addEventListener('stand');
// const playAgainEl = document.addEventListener('play-again');

/*-------------------------------- Functions --------------------------------*/

/*
What this code basically does is that it is a nested loop that goes through both the cardSuits and cardRanks array 
and creates a concatenated string displaying both the suit and rank of each card.
*/
for(i = 0; i < 4; i++){
    for(j = 0; j < 13; j++) {
        deck.push(cardRanks[j] + cardSuits[i]);
    }
};

/* 
What this code basically does is that it shuffles the deck through 100 loops (for accuracy purposes) using the code logic of math.floor 
and for loops. The last chunk of code means that the first card is temporarily saved, then it stores the second card in the first card position,
and then puts the first saved card in the second position.
*/

function shuffleCards(deck) {
    for(i = 0; i < 100; i++) {
        let firstCard = Math.floor((Math.random() * deck.length));
        let secondCard = Math.floor((Math.random() * deck.length));
     
        let firstPoisition = deck[firstCard];
        deck[firstCard] = deck[secondCard];
        deck[secondCard] = firstPoisition;
    }
    return deck;
};

deck = shuffleCards(deck);

console.log(deck);

/*----------------------------- Event Listeners -----------------------------*/


