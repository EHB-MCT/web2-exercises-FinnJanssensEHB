"use strict";

let rndNumber = Math.floor(Math.random() * 10);
let output = document.getElementById('message');


window.onload = function () {
  document.getElementById('submitBtn').addEventListener('click', e => {
    compareNumbers(document.getElementById("inputField").value);
  });
}

function compareNumbers(input) {
  return new Promise(function (resolve, reject) {
    if (input == rndNumber) resolve("You guessed the right number!");
    else if (input > rndNumber) reject("The random number is smaller!");
    else if (input < rndNumber) reject("The random number is bigger!");
  });
}