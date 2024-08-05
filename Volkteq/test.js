let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sum = 0;
/* let username = window.prompt("What's your name?");
let chip = window.prompt("How much are you willing to bet?"); For getting a window prompt for entering name and betting amount */
let username = "";
let chips = 0;
function capitalizeFirstLetter(str) {
  if (str.length === 0) return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
}
function submitUsername() {
  username = document.getElementById("username").value;
  username = capitalizeFirstLetter(username);
  chips = document.getElementById("amount").value;
  if (username.trim() !== "" && chips > 0) {
    let playerEl = document.querySelector(".player-el");
    document.getElementById("inputContainer").style.display = "none";
    let player = {
      name: username,
      chip: chips,
    };
    playerEl.textContent = player.name + ": $" + player.chip;
  } else {
    alert("Please enter a username.");
  }
}
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandCard() {
  let values = Math.floor(Math.random() * 13 + 1);
  if (values > 1 && values <= 10) {
    return values;
  } else if (values === 1) {
    return 11;
  } else if (values >= 11 && values <= 13) {
    return 10;
  }
}

function startgame() {
  let firstCard = getRandCard();
  let secondCard = getRandCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  rendergame();
}
function rendergame() {
  cardsEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    sumEl.textContent = "Sum : " + sum;
    message = "Do you want to draw a new card? 🙂";
    isAlive = true;
  } else if (sum === 21) {
    sumEl.textContent = "Sum : " + sum;
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
    isAlive = true;
  } else {
    sumEl.textContent = "Sum : " + sum;
    message = "You're out of the game! 😭";
    isAlive = false;
  }

  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandCard();
    sum += card;
    cards.push(card);
    rendergame();
  }
}
