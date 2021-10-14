"use strict;"

const BASE_URL = "http://www.omdbapi.com/?";
const API_KEY = "70468ac";

window.onload = function () {
  let callURL = `${BASE_URL}t=Parasite&y=2019&apikey=${API_KEY}`;
  getData(callURL).then(d => console.log(d));
};

async function getData(url) {
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    return data;
  } else console.log("Fetch call returned: " + response.status);
}