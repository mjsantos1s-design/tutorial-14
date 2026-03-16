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
}

//Disable POker Button
function disableObj(obj) {
   obj.disabled = true;
   obj.style.opacity = 0.25;
}

// Enable Poker Button
function enableObj(obj) {
   obj.disabled = false;
   obj.style.opacity = 1;
}