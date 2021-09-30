'use strict;'

window.onload = function () {
  console.log("loaded");
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", formEventListener);
}

function formEventListener(e) {
  e.preventDefault();
  console.log("Submit button was clicked");
}