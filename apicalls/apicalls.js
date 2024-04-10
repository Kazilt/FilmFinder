export const getData = (page) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjFmNmIwZmJjOTEzMmU3Mjc3N2U4NGRiMDgyMTQwNyIsInN1YiI6IjY1ZThmMzRlNmEyMjI3MDE4Njk0OGYwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rh3SRuBZFhWgMbTuK7Io1hwWczf0rU7MKRAPs8HGzCs",
    },
  };
  const newParams = new URLSearchParams({
    page: page,
  });
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?" + newParams.toString();
  return fetch(url, options)
    .then((response) => response.json())
    .then((response) => response["results"])
    .catch((err) => console.error(err));
};

export const Img_path = "http://image.tmdb.org/t/p/w185";
