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
let gameStarted = false;
let aceWeight;

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

restartButtonEl.disabled = true;

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
    aceWeight = 0;

    for (let i = 0; i < playerHand.length; i++) {
        let card = playerHand[i];
        let value = card.slice(0, card.length - 1)

        if (value === 'A') {
            playerScore += 11;
            aceWeight++
        } else if (value === 'K' || value === 'Q' || value === 'J') {
            playerScore += 10;
        } else {
            playerScore += Number(value);
        }

        while (playerScore > 21 && aceWeight > 0) {
            playerScore -= 10;
            aceWeight--   
        }
    }

    return playerScore;
}

function calculateDealerScore() {
    dealerScore = 0;
    aceWeight = 0;

    for (let i = 0; i < dealerHand.length; i++) {
        let card = dealerHand[i];
        let value = card.slice(0, card.length - 1)

        if (value === 'A') {
            dealerScore += 11;
            aceWeight++
        } else if (value === 'K' || value === 'Q' || value === 'J') {
            dealerScore += 10;
        } else {
            dealerScore += Number(value);
        }

        while (dealerScore > 21 && aceWeight > 0) {
            dealerScore -= 10;
            aceWeight--   
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

    playerScore = calculatePlayerScore();
    dealerScore = calculateDealerScore();

    gameMessage = '';
    gameStarted = true;
    renderBlackjack();

    startButtonEl.disabled = true;
    restartButtonEl.disabled = false;
    hitButtonEl.disabled = false;
    standButtonEl.disabled = false;

    if (playerScore === 21 && dealerScore === 21) {
        gameMessage = "Tie 🤝";
        gameStarted = false;
        hitButtonEl.disabled = true;
        standButtonEl.disabled = true;
    } else if (playerScore === 21) {
        gameMessage = "Player Wins 👑";
        gameStarted = false;
        hitButtonEl.disabled = true;
        standButtonEl.disabled = true;
    } else if (dealerScore === 21) {
        gameMessage = "Dealer Wins 💩";
        gameStarted = false;
        hitButtonEl.disabled = true;
        standButtonEl.disabled = true;
    }
}

function hitAction() {
    if (!gameStarted) {
        return;
    };

    playerHand.push(deck.pop());

    playerScore = calculatePlayerScore();
    dealerScore = calculateDealerScore();

    if (playerScore > 21) {
        gameMessage = 'Player Busted... Dealer Wins 💩';
        gameStarted = false;
        standButtonEl.disabled = true;
        hitButtonEl.disabled = true;
    } else if (playerScore === 21) {
        winnerDecision();
        gameStarted = false;
        standButtonEl.disabled = true;
        hitButtonEl.disabled = true;
    } else if (dealerScore === 21) {
        gameMessage = "Dealer Wins 💩";
        gameStarted = false;
        hitButtonEl.disabled = true;
        standButtonEl.disabled = true;
    } else {
        standButtonEl.disabled = false;
    }

    renderBlackjack();
}

function standAction() {
    if (!gameStarted) {
        return;
    };

    while (dealerScore <= 16) {
        dealerHand.push(deck.pop());
        dealerScore = calculateDealerScore();
    };

        winnerDecision();

        renderBlackjack();
}

function winnerDecision(){
    gameStarted = false;
    hitButtonEl.disabled = true;
    standButtonEl.disabled = true;

    if (playerScore > 21) {
        gameMessage = 'Player Busted... Dealer Wins 💩';
    } else if (dealerScore > 21) {
        gameMessage = 'Dealer Busted... Player Wins 👑';
    } else if (playerScore > dealerScore) {
        gameMessage = 'Player Wins 👑';
    } else if (playerScore < dealerScore) {
        gameMessage = 'Dealer Wins 💩';
    } else if (playerScore === dealerScore) {
        gameMessage = 'Tie 🤝';
    };
}

function restartGame(){
    playerHand = [];
    dealerHand = [];
    playerScore = 0;
    dealerScore = 0;
    gameMessage = '';
    gameStarted = false;

    cardHolders();

    playerScore = calculatePlayerScore();
    dealerScore = calculateDealerScore();

    gameStarted = true;
    standButtonEl.disabled = false;
    hitButtonEl.disabled = false;

    renderBlackjack();

}

/*----------------------------- Event Listeners -----------------------------*/

startButtonEl.addEventListener('click', startGame);
hitButtonEl.addEventListener('click', hitAction);
standButtonEl.addEventListener('click', standAction);
restartButtonEl.addEventListener('click', restartGame);
