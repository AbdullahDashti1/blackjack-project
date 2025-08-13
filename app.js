/*-------------------------------- Constants --------------------------------*/

const cardSuits = ['Spades', 'Diamond', 'Clubs', 'Hearts'];
const cardRanks = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

/*---------------------------- Variables (state) ----------------------------*/

let deck;
let playerHand;
let dealerHand;
let playerScore;
let dealerScore;
let gameMessage;
let gameState;

/*------------------------ Cached Element References ------------------------*/

const playerCardEl = document.addEventListener('#player-card');
const dealerCardEl = document.addEventListener('#dealers-card');
const playerScoreEl = document.addEventListener('players-score');
const dealerScoreEl = document.addEventListener('dealers-score');
const gameMessageEl = document.addEventListener('game-message');
const hitEl = document.addEventListener('hit');
const standEl = document.addEventListener('stand');
const playAgainEl = document.addEventListener('play-again');

/*-------------------------------- Functions --------------------------------*/

function init(){

};

/*----------------------------- Event Listeners -----------------------------*/


