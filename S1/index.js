'use strict;'

const dishes = [];
dishes.push({
  id: '1',
  name: 'Burger and french fries',
  price: '18'
})
dishes.push({
  id: '2',
  name: 'Pizza Salami',
  price: '14'
})
dishes.push({
  id: '3',
  name: 'Chicken nuggets and french fries',
  price: '15'
})

window.onload = function () {
  console.log("loaded");
  generateDishOptions();
  const form = document.getElementById('form');
  form.addEventListener('submit', formEventListener);
}

function formEventListener(e) {
  e.preventDefault();
  console.log("Submit button was clicked");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let order = document.querySelector('input[name="dish"]:checked').value;
  let orderDetails = {
    name,
    email,
    order
  };
  printOrder(orderDetails);
}

function generateDishOptions() {
  const orderContainer = document.getElementById('orderContainer');
  let radioButtons = "";
  dishes.forEach(dish => {
    radioButtons += `
      <input type="radio" id="dish${dish.id}" name="dish" value="${dish.name}">
      <label for="dish${dish.id}">${dish.name}</label><br>
    `;
  });
  orderContainer.innerHTML = radioButtons;
}

let printOrder = ({
  name,
  order,
  email
}) => {
  let finalText = document.getElementById("finalText");
  finalText.innerHTML = `The order for the customer ${name} is the following:  ${order}. The customer may be notified by email:  ${email}`;
}