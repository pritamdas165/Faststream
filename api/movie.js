 export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`
  );

  const data = await response.json();
  res.status(200).json(data);
}
