import _ from 'lodash';
import Cleave from 'cleave.js';

require('cleave.js/dist/addons/cleave-phone.BE');

window.onload = function () {
  console.log("window loaded");
  document.getElementById('inputForm').addEventListener('submit', showInfo);
}

var cleaveName = new Cleave('#nameInput', {
  prefix: 'STUDENT-'
});

var cleaveBirthDate = new Cleave('#birthDateInput', {
  date: true,
  delimiter: '-',
  datePattern: ['d', 'm', 'Y']
});

var cleaveRRN = new Cleave('#rrnInput', {
  delimiters: ['.', '.', '-', '.'],
  blocks: [2, 2, 2, 3, 2]
});

var cleaveAge = new Cleave('#ageInput', {
  numeral: true,
  numeralPositiveOnly: true
});


var cleavePhone = new Cleave('#phoneInput', {
  phone: true,
  phoneRegionCode: 'BE'
});

function showInfo(e) {
  e.preventDefault();
  console.log("submit");
  let jumbo = document.getElementById('infoJumbotron');
  console.log(jumbo.children);
  jumbo.children[0].innerHTML = document.getElementById('nameInput').value;
  jumbo.children[2].innerHTML = `Birth Date: ${document.getElementById('birthDateInput').value}`;
  jumbo.children[3].innerHTML = `RRN: ${document.getElementById('rrnInput').value}`;
  jumbo.children[4].innerHTML = `Age: ${document.getElementById('ageInput').value}`;
  jumbo.children[5].innerHTML = `Phone Number: ${document.getElementById('phoneInput').value}`;
  jumbo.style.display = "block";
}