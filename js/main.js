 import { getPopularMovies } from "../api/tmdb.js";

const movieContainer = document.getElementById("movie-container");

async function loadMovies() {
  const movies = await getPopularMovies();
  movieContainer.innerHTML = "";

  movies.forEach(movie => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    movieDiv.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
      <h3>${movie.title}</h3>
    `;

    movieContainer.appendChild(movieDiv);
  });
}

loadMovies();
