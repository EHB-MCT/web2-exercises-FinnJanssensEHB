'use strict;'

window.onload = function () {
  console.log("loaded");
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", formEventListener);
}

function formEventListener(e) {
  e.preventDefault();
  console.log("Submit button was clicked");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let order = document.getElementById("order").value;
  let finalText = document.getElementById("finalText");
  finalText.innerHTML = `The order for the customer ${name} is the following:  ${order}. The customer may be notified by email:  ${email}`;
}