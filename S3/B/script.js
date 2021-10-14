"use strict;"

const BASE_URL = "http://www.omdbapi.com/?";
const API_KEY = "70468ac";

window.onload = function () {
  document.getElementById('searchform').addEventListener('submit', e => {
    e.preventDefault();
    let callURL = `${BASE_URL}s=${getSearchInput()}&apikey=${API_KEY}`;
    getData(callURL).then(d => renderMovies(d));
  });
};

function getSearchInput() {
  return document.getElementById('inputTitle').value;
}

async function getData(url) {
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    return data;
  } else console.log("Fetch call returned: " + response.status);
}

async function renderMovies(movies) {
  let container = document.getElementById('resultsContainer');
  container.innerHTML = "";
  await movies.Search.forEach(movie => {
    let callURL = `${BASE_URL}i=${movie.imdbID}&apikey=${API_KEY}`;
    getData(callURL).then(d => {
      let htmlString = `
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${d.Poster == "N/A" ? "https://www.mcicon.com/wp-content/uploads/2021/01/Music_Movie_1-copy-2.jpg" : d.Poster}" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${d.Title}</h5>
                <p class="card-text">${d.Plot}</p>
                <p class="card-text"><small class="text-muted">Runtime: ${d.Runtime == "N/A" ? "-" : d.Runtime}</small></p>
                <button type="button" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
</svg>
                Add
              </button>
              </div>
            </div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', htmlString);
    });
  });

}