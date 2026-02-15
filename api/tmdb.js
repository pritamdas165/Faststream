 export default async function handler(req, res) {
  const { type } = req.query;

  if (!type) {
    return res.status(400).json({ error: "Type is required" });
  }

  const TMDB_KEY = "11a35ddf80fa31fe5fddf8087e313018";
  const url = `https://api.themoviedb.org/3/${type}?api_key=${TMDB_KEY}`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "TMDB fetch failed" });
  }
}
