"use strict";

let input, message;
let rndNumber = Math.floor(Math.random() * 10);
let output = document.getElementById('message');


window.onload = function () {
  document.getElementById('submitBtn').addEventListener('click', function () {
    getNumberInput();
  });
}

function getNumberInput() {
  input = document.getElementById("inputField").value;
  compareNumbers(input);
}

function compareNumbers(input) {
  console.log(input);
  if (input == rndNumber) {
    output.innerText = "You guessed the right number!"
  } else if (input > rndNumber) {
    output.innerText = "The random number is smaller!"
  } else if (input < rndNumber) {
    output.innerText = "The random number is bigger!"
  } else {
    output.innerText = "Wrong input"
  }
}