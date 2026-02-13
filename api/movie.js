 export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const [movieRes, similarRes] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`),
      fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=YOUR_API_KEY`)
    ]);

    const movie = await movieRes.json();
    const similar = await similarRes.json();

    res.status(200).json({ movie, similar: similar.results });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
}
