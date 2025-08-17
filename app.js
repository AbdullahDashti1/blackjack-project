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

const playerHandEl = document.querySelector('#player-hand');
const dealerHandEl = document.querySelector('#dealer-hand');
const playerScoreEl = document.querySelector('#player-score');
const dealerScoreEl = document.querySelector('#dealer-score')
const startButtonEl = document.querySelector('#start-button');
const hitButtonEl = document.querySelector('#hit-button');
const gameMessageEl = document.querySelector('#game-message')

/*-------------------------------- Functions --------------------------------*/

/*
What this code basically does is that it is a nested loop that goes through both the cardSuits and cardRanks array 
and creates a concatenated string displaying both the suit and rank of each card.
*/

function createDeck() {
    deck = [];
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
    for (let i = 0; i < 4321; i++) {
        let firstCard = Math.floor((Math.random() * deck.length));
        let secondCard = Math.floor((Math.random() * deck.length));

        let storeCard = deck[firstCard];
        deck[firstCard] = deck[secondCard];
        deck[secondCard] = storeCard;
    }
    return deck;
};

/*
What this code basically does is that it create a deck variable to where it goes through the shuffleCards function which obviously shuffles the cards 
and then through createDeck function which concatenates the constants of cardRanks and cardSuits. Below this line of code, we see ghat there is a variable
playerHand and dealerHand that selects 2 cards for both the dealer and the player by using the array iterator method of pop, in which it returns the
last element of the array, and we used it twice per hand. 
*/

function cardHolders() {
    deck = shuffleCards(createDeck());
    playerHand = [deck.pop(), deck.pop()];
    dealerHand = [deck.pop(), deck.pop()];
}

/*
What this code basically does is that it calculates both the player score and the dealer score, it starts at 0, then we use a for loop statement throughout
the player's hand and use the slice method to only consider the rank of the card for this particular case, neglecting the rank of the card. To which we create
a if else statement of the card ranks, and we use number(card) to convert the cardRanks variable from a string to number, which is used for calculation. 
*/

function calculatePlayerScore() {
    playerScore = 0;

    for (let i = 0; i < playerHand.length; i++) {
        let card = playerHand[i].slice(0, -1)

        if (card === 'A') {
            playerScore += 11
        } else if (card === 'K' || card === 'Q' || card === 'J') {
            playerScore += 10;
        } else {
            playerScore += Number(card);
        }
    }

    return playerScore;
}

function calculateDealerScore() {
    dealerScore = 0;

    for (let i = 0; i < dealerHand.length; i++) {
        let card = dealerHand[i].slice(0, -1);

        if (card === 'A') {
            dealerScore += 11
        } else if (card === 'K' || card === 'Q' || card === 'J') {
            dealerScore += 10;
        } else {
            dealerScore += Number(card);
        }
    }

    return dealerScore;
}

/*
What this code basically does is that it render the game using the speciifc elements we want to be displayed in the web page through the usage of textContent
function which will enable us to display whatever text we need to be displayed in the webpage. Additionally, we could use speciifc syntaxes we need for it
such as array iterators or special string printing and whatnot as shown below. 
*/

function renderBlackjack() {
    playerHandEl.textContent = playerHand.join(', ');
    dealerHandEl.textContent = dealerHand.join(', ');
    playerScoreEl.textContent = `Player score is: ${playerScore}`;
    dealerScoreEl.textContent = `Dealer score is: ${dealerScore}`;
    gameMessageEl.textContent = gameMessage;
}
/*
What this code basically does is that it starts a game to where a user is introduced with 2 shuffled cards, as well as the dealer recieves 2 shuffled cards. 
The functions callbacked in the deck varirable returns the shuffled cards as we as the deck we created. The player and the dealer begin with 2 cards, where 
we use the pop method to get the last array and implement it in this player/dealer hand. We then use the score function to determine what is the score
when we first recieve the cards. 
*/

function startGame() {
    cardHolders();

    playerScore = calculatePlayerScore(playerHand);
    dealerScore = calculateDealerScore(dealerHand);

    console.log(playerHand, playerScore);
    console.log(dealerHand, dealerScore);

    renderBlackjack();
}

/*
What this code basically does is that the user is able to press the hit button after starting the game, that depends if the user wants to continue or not.
We use the push iterator to add one more card for the player, through the already deck.pop array, which consists of what the player has in their hands. Then 
we run a if, else if, else logic for how the win or loss works here, if the player exceeds 21 score, we lose, if the dealer does, they lose; and then we render
the function so that it displays in the webpage. 
*/

function hitAction() {
    playerHand.push(deck.pop());

    playerScore = calculatePlayerScore();
    dealerScore = calculateDealerScore();

    if (playerScore > 21) {
        gameMessage = 'Player Busted... Dealer Wins 😭'
    } else if (dealerScore > 21) {
        gameMessage = 'Dealer Busted... Player Wins 😀'
    } else {
        gameMessage = ' ';
    };

    renderBlackjack();
}

/*

*/

function standAction(){
    renderBlackjack();
}
/*----------------------------- Event Listeners -----------------------------*/

startButtonEl.addEventListener('click', startGame);
hitButtonEl.addEventListener('click', hitAction);