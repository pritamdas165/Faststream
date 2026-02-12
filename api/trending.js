export default async function handler(req, res) {

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTJkMzRjZDVmYTQ3ZTFkZjE4YTNkZTg3MGZhOGM3NCIsIm5iZiI6MTc3MDkwMTExNy41MzYsInN1YiI6IjY5OGRjZTdkZjQ5NjQ5NjdhZjc4ZGIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jQYrmuv7kAL4s-g82qXBk4W9Lzc6Pi8xc4TwB7z69Fk";

try {

const response = await fetch(
"https://api.themoviedb.org/3/trending/movie/week",
{
headers: {
Authorization: `Bearer ${TOKEN}`,
"Content-Type": "application/json"
}
}
);

const data = await response.json();

res.status(200).json(data);

} catch (error) {
res.status(500).json({ error: "Failed to fetch data" });
}

}
