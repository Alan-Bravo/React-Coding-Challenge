
//ACA SE LLAMA A LA API DE BUSQUEDA

export const getMovies = async(title) => {
  const APIKEY = `06379eb7886ae91c2dff6ce752c1665c`
  const URLMOVIES = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${title}`;

  const res = await fetch(URLMOVIES);
  const { results } = await res.json();
  
  const movies = results.map( i => ({
    title: i.title,
    id: i.id,
    overview: i.overview,
    img: i.poster_path,
    relDate: i.release_date,
    rating: i.vote_average
  }))

  return movies;
}
