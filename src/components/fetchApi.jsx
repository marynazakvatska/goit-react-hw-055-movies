
const KEY = "d0c71efd73c6a531b3a5107b615dfe5b"


export function fetchAllMovies() {  //список найпопулярніших фільмів на сьогодні
  return (
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    )
      .then(response => {
        return response.json();
      })
    /*   .then(data =>data) */
  );
}



export function fetchSearchMovies(movie) {  //список найпопулярніших фільмів на сьогодні
  return (
    fetch(
      `https://api.themoviedb.org/3/search/${movie}?api_key=${KEY}&language=en-US&page=1&include_adult=false`
    )
      .then(response => {
        return response.json();
      })
      .then(data => { return data
      
      })
  );
}






export function fetchhMovieDetails(movie_id) {  //запит повної інформації 
  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`
    )
      .then(response => {
        return response.json();
      })
      .then(data => { return data
      
      })
  );
}




export function fetchhMovieCredits(movie_id) {  //запит 
  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data
      
      })
  );
}


export function fetchhMovieReviews(movie_id) {  //запит 
  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
    )
      .then(response => {
        return response.json();
      })
      .then(data => { return data
      
      })
  );
}
