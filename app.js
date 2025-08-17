/*-------------------------------- Constants --------------------------------*/

const cardSuits = ['♠', '♥', '♦', '♣'];
const cardRanks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

/*---------------------------- Variables (state) ----------------------------*/

let deck;
let playerHand;
let dealerHand;
let playerScore;
let dealerScore;
let gameMessage;
let gameState;

/*------------------------ Cached Element References ------------------------*/

// const playerHandEL = document.querySelector('#player-hand');
// const dealerHandEl = document.querySelector('#dealer-hand');
// const startButtonEl = document.querySelector('#start-button');
// const hitButtonEl = document.querySelector('#hit-button');
// const standButtonEl = document.querySelector('#stand-button');
// const gameMessageEl = document.querySelector('#game-message');

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

function shuffleCards(deck) {
    for (let i = 0; i < 1000; i++) {
        let firstCard = Math.floor((Math.random() * deck.length));
        let secondCard = Math.floor((Math.random() * deck.length));

        let temp = deck[firstCard];
        deck[firstCard] = deck[secondCard];
        deck[secondCard] = temp;
    }
    return deck;
};

/*
What this code basically does it that it 
*/

function calculatePlayerScore() {
    let score = 0;

    for (let i = 0; i < playerHand.length; i++) {
        let card = playerHand[i].slice(0, -1); 

        if (card === 'A' || card === 'K' || card === 'Q' || card === 'J') {
            score += 10;
        } else {
            score += Number(card);
        }
    }

    return score;
}

function calculateDealerScore() {
    let score = 0;

    for (let i = 0; i < dealerHand.length; i++) {
        let card = dealerHand[i].slice(0, -1); 

        if (card === 'A' || card === 'K' || card === 'Q' || card === 'J') {
            score += 10;
        } else {
            score += Number(card);
        }
    }

    return score;
}
/*
What this code basically does is that it starts a game to where a user is introduced with 2 shuffled cards, as well as the dealer recieves 2 shuffled cards. 
The functions callbacked in the deck varirable returns the shuffled cards as we as the deck we created. The player and the dealer begin with 2 cards, where 
we use the pop method to get the last array and implement it in this player/dealer hand. We then use the score function to determine what is the score
when we first recieve the cards. 
*/

function startGame() {
    deck = shuffleCards(createDeck());

    playerHand = [deck.pop(), deck.pop()];
    dealerHand = [deck.pop(), deck.pop()];

    playerScore = calculatePlayerScore(playerHand);
    dealerScore = calculateDealerScore(dealerHand);

    console.log(playerHand, playerScore);
    console.log(dealerHand, dealerScore);
}

startGame();


/*----------------------------- Event Listeners -----------------------------*/

// startButtonEl.addEventListener('click', startGame);
// hitButtonEl.addEventListener('click', hit);
// standButtonEl.addEventListener('click', stand);