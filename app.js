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
const gameMessageEl = document.querySelector('#game-message');
const standButtonEl = document.querySelector('#stand-button');
const restartButtonEl = document.querySelector('#restart-button');

/*-------------------------------- Functions --------------------------------*/

function createDeck() {
    deck = [];
    for (let i = 0; i < cardSuits.length; i++) {
        for (let j = 0; j < cardRanks.length; j++) {
            deck.push(cardRanks[j] + cardSuits[i]);
        }
    }
    return deck;
};

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

function cardHolders() {
    deck = shuffleCards(createDeck());
    playerHand = [deck.pop(), deck.pop()];
    dealerHand = [deck.pop(), deck.pop()];
}

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

function renderBlackjack() {
    playerHandEl.textContent = playerHand.join(', ');
    dealerHandEl.textContent = dealerHand.join(', ');
    playerScoreEl.textContent = `Player score is: ${playerScore}`;
    dealerScoreEl.textContent = `Dealer score is: ${dealerScore}`;
    gameMessageEl.textContent = gameMessage;
}

function startGame() {
    cardHolders();

    playerScore = calculatePlayerScore(playerHand);
    dealerScore = calculateDealerScore(dealerHand);

    renderBlackjack();
}

function hitAction() {
    playerHand.push(deck.pop());

    playerScore = calculatePlayerScore();
    dealerScore = calculateDealerScore();

    if (playerScore > 21) {
        gameMessage = 'Player Busted... Dealer Wins ❌';
    } else {
        gameMessage = ' ';
    };

    renderBlackjack();
}

function standAction() {
    while (dealerScore <= 16) {
        dealerHand.push(deck.pop());
        dealerScore = calculateDealerScore();
    };

    if (dealerScore > 21) {
        gameMessage = 'Dealer Busted... Player Wins ✅';

        winnerDecision();

        renderBlackjack();
    };
}

function winnerDecision(){
    if (playerScore > 21) {
        gameMessage = 'Player Busted... Dealer Wins ❌';
    } else if (dealerScore > 21) {
        gameMessage = 'Dealer Busted... Player Wins ✅';
    } else if (playerScore > dealerScore) {
        gameMessage = 'Player Wins ✅';
    } else if (playerScore < dealerScore) {
        gameMessage = 'Dealer Wins ❌';
    } else if (playerScore === dealerScore) {
        gameMessage = 'Tie 🤝';
    };
}

function restartGame(){
    playerHand = [];
    dealerHand = [];
    playerScore = 0;
    dealerScore = 0;
    gameMessage = 'Game Has Been Restarted, You Can Play Again.';

    cardHolders();

    playerScore = calculatePlayerScore(playerHand);
    dealerScore = calculateDealerScore(dealerHand);

    renderBlackjack();
}

/*----------------------------- Event Listeners -----------------------------*/

startButtonEl.addEventListener('click', startGame);
hitButtonEl.addEventListener('click', hitAction);
standButtonEl.addEventListener('click', standAction);
restartButtonEl.addEventListener('click', restartGame);