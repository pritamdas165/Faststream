export default async function handler(req, res) {
  const { type, query } = req.query;

  const TMDB_KEY = "11a35ddf80fa31fe5fddf8087e313018";

  let url = "";

  if (type === "trending") {
    url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_KEY}`;
  } else if (type === "popular") {
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}`;
  } else if (type === "search") {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${query}`;
  } else {
    return res.status(400).json({ error: "Invalid type" });
  }

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "TMDB fetch failed" });
  }
}
