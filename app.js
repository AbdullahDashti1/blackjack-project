/*-------------------------------- Constants --------------------------------*/

const cardSuits = ['♠', '♥', '♦', '♣'];
const cardRanks = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

/*---------------------------- Variables (state) ----------------------------*/

let deck = [];
let playerHand = [];
let dealerHand = [];
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

function createDeck() {
    let deck = [];
    for (let i = 0; i < cardSuits.length; i++) {
        for (let j = 0; j < cardRanks.length; j++) {
            deck.push(cardRanks[j] + cardSuits[i]);
        }
    }
    return deck;
};

/* 
What this code basically does is that it shuffles the deck through 100 loops (for accuracy purposes) using the code logic of math.floor 
and for loops. The last chunk of code means that the first card is temporarily saved, then it stores the second card in the first card position,
and then puts the first saved card in the second position.
*/

function shuffleCards() {
    for (let i = 0; i < 100; i++) {
        let firstCard = Math.floor((Math.random() * createDeck.length));
        let secondCard = Math.floor((Math.random() * createDeck.length));

        let firstPoisition = createDeck[firstCard];
        createDeck[firstCard] = createDeck[secondCard];
        createDeck[secondCard] = firstPoisition;
    }
    return deck;
};

console.log(deck);

function startGame() {

    let shuffleDeck = shuffleCards(createDeck());

    function dealPlayerCard() {
        return [shuffleDeck[0], shuffleDeck[1]];
    }

    function dealDealerCard() {
        return [shuffleDeck[2], shuffleDeck[3]];
    }

    let playerCard = dealPlayerCard();
    let dealerCard = dealDealerCard();

    console.log(playerCard);
    console.log(dealerCard);
};

startGame();

/*----------------------------- Event Listeners -----------------------------*/


