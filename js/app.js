const IMG = "https://image.tmdb.org/t/p/w500";

async function load(type, el) {
  const res = await fetch(`/api/tmdb?type=${type}`);
  const data = await res.json();

  el.innerHTML = data.results
    .map(m => `<img src="${IMG + m.poster_path}" />`)
    .join("");
}

load("trending/movie/day", document.getElementById("trending"));
load("movie/popular", document.getElementById("popular"));
