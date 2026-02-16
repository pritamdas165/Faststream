// ===== CONFIG =====
const API_KEY = "cc9374659de08b939499a50af4715216";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

// Container
const moviesContainer = document.getElementById("movies");

// ===== FETCH POPULAR MOVIES =====
async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error("TMDB API error");
    }

    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    console.error(error);
    moviesContainer.innerHTML = `
      <p style="color:red;text-align:center;">
        ❌ Movies load failed. Please try again later.
      </p>
    `;
  }
}

// ===== DISPLAY MOVIES =====
function displayMovies(movies) {
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img 
        src="${
          movie.poster_path
            ? IMAGE_BASE + movie.poster_path
            : "https://via.placeholder.com/500x750?text=No+Image"
        }" 
        alt="${movie.title}"
      />
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span>⭐ ${movie.vote_average}</span>
      </div>
    `;

    moviesContainer.appendChild(movieCard);
  });
}

// ===== INIT =====
fetchPopularMovies();
