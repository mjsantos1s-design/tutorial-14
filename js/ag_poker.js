"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Tutorial Case

   Author: Michael Santos
   Date:   
   
   Filename: ag_poker.js

*/

window.addEventListener("load", playDrawPoker);

function playDrawPoker() {
   var dealButton = document.getElementById("dealB");
   var drawButton = document.getElementById("drawB");
   var standButton = document.getElementById("standB");
   var resetButton = document.getElementById("resetB");
   var handValueText = document.getElementById("handValue");
   var betSelection = document.getElementById("bet");
   var bankbox = document.getElementById("bank");
   var cardImages = document.querySelectorAll("img.cardImg");

// Set the initial values of the pokergame object
pokerGame.currentBank = 500;
pokerGame.currentet = 25;

//Create a new deck of cards and shuffle it
var myDeck = new pokerDeck();
myDeck.shuffle();

// Create a pokerHand object
var myHand = new pokerHand(5);

bankbox.value = pokerGame.currentBank;
betSelection.onchange = function(e) {
   pokerGame.currentBet = parseInt(e.target.options[e.target.selectedIndex].value);
}

// Restart the game when the Reset button is clicked
resetButton.addEventListener("click", function() {
   pokerGame.currentBank = 500;
   bankbox.value = pokerGame.currentBank;
   enableObj(dealButton);
   enableObj(betSelection);
   disableObj(drawButton);
   disableObj(standButton);
});

// Enable the Draw and stand buttons after the deal
dealButton.addEventListener("click", function() {
   if (pokerGame.currentBank >= pokerGame.currentBet) {
   disableObj(dealButton);
   disableObj(betSelection);
   enableObj(drawButton);
   enableObj(standButton);
   bankbox.value = pokerGame.placeBet();

   //Deal cards into the poker hand after confirming
   //There are at least 10 cards in the deck
   if (myDeck.cards.length < 10) {
      myDeck = new pokerDeck();
      myDeck.shuffle();
   }
   myDeck.dealTo(myHand);

   //Display the card images on the table
   for (var i = 0; i < cardImages.length; i++) {
      cardImages[i].src = myHand.cards[i].cardImage();
   }

   } else {
      alert("Reduce the size of your bet");
   }
});

// Enable the Deal and Bet options when the current hand ends
drawButton.addEventListener("click", function() {
   enableObj(dealButton);
   enableObj(betSelection);
   disableObj(drawButton);
   disableObj(standButton);
});
standButton.addEventListener("click", function() {
   enableObj(dealButton);
   enableObj(betSelection);
   disableObj(drawButton);
   disableObj(standButton);
});

//Disable Poker Button
function disableObj(obj) {
   obj.disabled = true;
   obj.style.opacity = 0.25;
}

// Enable Poker Button
function enableObj(obj) {
   obj.disabled = false;
   obj.style.opacity = 1;
}
}