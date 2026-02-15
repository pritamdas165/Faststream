export default async function handler(req, res) {
  const { type } = req.query;
  const KEY = "YOUR_TMDB_V3_KEY";

  const url = `https://api.themoviedb.org/3/${type}?api_key=${KEY}`;
  const r = await fetch(url);
  const data = await r.json();

  res.status(200).json(data);
}
