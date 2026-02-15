 // js/main.js

// Temporary demo data (later API দিয়ে replace করা হবে)
const movies = [
  {
    title: "Movie One",
    image: "https://via.placeholder.com/300x450?text=Movie+1"
  },
  {
    title: "Movie Two",
    image: "https://via.placeholder.com/300x450?text=Movie+2"
  },
  {
    title: "Movie Three",
    image: "https://via.placeholder.com/300x450?text=Movie+3"
  }
];

// DOM element
const movieContainer = document.getElementById("movie-container");

// Load movies
function loadMovies() {
  movieContainer.innerHTML = "";

  movies.forEach(movie => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    movieDiv.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;

    movieContainer.appendChild(movieDiv);
  });
}

// Call function on page load
loadMovies();
