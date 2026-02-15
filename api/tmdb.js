export default async function handler(req, res) {
  const { type = "popular" } = req.query;

  const TMDB_KEY = process.env.TMDB_KEY;
  const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${TMDB_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "TMDB fetch failed" });
  }
}
