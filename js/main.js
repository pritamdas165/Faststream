import { getPopularMovies } from "./tmdb.js";

const movieContainer = document.getElementById("movie-container");

async function loadMovies() {
  try {
    const movies = await getPopularMovies();
    movieContainer.innerHTML = "";

    movies.forEach(movie => {
      const div = document.createElement("div");
      div.className = "movie";

      div.innerHTML = `
        <img src="${
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image"
        }" />
        <h3>${movie.title}</h3>
      `;

      movieContainer.appendChild(div);
    });
  } catch (error) {
    movieContainer.innerHTML = "<p>Error loading movies</p>";
    console.error(error);
  }
}

loadMovies();
