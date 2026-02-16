 const API_KEY = "cc9374659de08b939499a50af4715216";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const moviesContainer = document.getElementById("movies");
const loader = document.getElementById("loader");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// FETCH MOVIES
async function fetchMovies(url) {
  loader.classList.remove("hidden");
  moviesContainer.innerHTML = "";

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMovies(data.results);
  } catch {
    moviesContainer.innerHTML = "<p>Error loading movies</p>";
  }

  loader.classList.add("hidden");
}

// DISPLAY
function displayMovies(movies) {
  movies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie-card");

    div.innerHTML = `
      <img src="${movie.poster_path ? IMAGE_BASE + movie.poster_path : ''}">
      <div class="movie-info">
        <h4>${movie.title}</h4>
        <p>⭐ ${movie.vote_average}</p>
      </div>
    `;

    div.onclick = () => showDetails(movie);
    moviesContainer.appendChild(div);
  });
}

// MODAL
function showDetails(movie) {
  modal.classList.remove("hidden");
  modalBody.innerHTML = `
    <h2>${movie.title}</h2>
    <p>${movie.overview}</p>
  `;
}

closeModal.onclick = () => modal.classList.add("hidden");

// SEARCH
searchForm.addEventListener("submit", e => {
  e.preventDefault();
  const q = searchInput.value;
  if (q) {
    fetchMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${q}`);
  }
});

// INIT
fetchMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
