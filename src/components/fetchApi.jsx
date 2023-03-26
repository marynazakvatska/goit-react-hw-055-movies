
const KEY = "d0c71efd73c6a531b3a5107b615dfe5b"


export function fetchAllMovies() {  
  return (
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    )
      .then(response => response.json())
  );
}



export function fetchSearchMovies(movie) {  //список найпопулярніших фільмів на сьогодні
  return (
    fetch(
      `https://api.themoviedb.org/3/search/${movie}?api_key=${KEY}&language=en-US&page=1&include_adult=false`
    )
       .then(response => response.json())
  );
}


export function fetchhMovieDetails(movie_id) {  
  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`
    )
       .then(response => response.json())
  );
}




export function fetchhMovieCredits(movie_id) {
  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`
    )
       .then(response => response.json())
  );
}


export function fetchhMovieReviews(movie_id) {  
  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
    )
       .then(response => response.json())
  );
}
