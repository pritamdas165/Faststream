export default async function handler(req, res) {
  const { type } = req.query;

  const TMDB_KEY = "YOUR_V3_API_KEY"; // <-- এখানে তোমার v3 key
  const url = `https://api.themoviedb.org/3/${type}?api_key=${TMDB_KEY}`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "TMDB fetch failed" });
  }
}
