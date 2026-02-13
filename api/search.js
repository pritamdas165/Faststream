 export default async function handler(req, res) {
  try {
    const query = req.query.query;

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=cc9374659de08b939499a50af4715216&query=${query}`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
}
