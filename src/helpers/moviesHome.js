
// SE LLAMA A LA API DISCOVER PARA LA HOME

export const moviesHome = async() => {
    const APIKEY = `06379eb7886ae91c2dff6ce752c1665c`
    const URLMOVIESHOME = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&page=10`;
  
    const res = await fetch(URLMOVIESHOME);
    const { results } = await res.json();
    
    const moviesHome = results.map( i => ({
      title: i.title,
      id: i.id,
      img: i.poster_path,
      overview: i.overview,
      relDate: i.release_date,
      rating: i.vote_average
    }))
  
    return moviesHome;
  }
  