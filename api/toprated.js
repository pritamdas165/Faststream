export default async function handler(req, res) {
  const TOKEN = process.env.TMDB_TOKEN;

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json"
      }
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
