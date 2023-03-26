import { useState, useEffect } from "react"
import { useParams, NavLink, Routes } from "react-router-dom"
/* import { Route } from "react-router-dom";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews"; */
import { Outlet } from "react-router-dom";


import {fetchhMovieDetails} from "components/fetchApi"

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    

function onBack() {
/*     history.push("/"); */
  }

    useEffect(() => {
fetchhMovieDetails(movieId).then(setMovie)
    }, [movieId])


    return (
        <>
            <button type="button" onClick={onBack}>Go back</button> 
            {movie && <div>
                 <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                <h1>{ movie.original_title}</h1>
                <p>User Score : {Math.round(movie.vote_average * 10)}%</p>
                <h2>Overview</h2>

                <p>{movie.overview}</p>
                <h2>Genres:</h2> <ul>
            {movie.genres &&
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                        </ul>
                
                <div>
                    <h3>Additional information</h3>
                    <ul>

                        <li><NavLink to='cast'>Cast</NavLink></li>
                        <li><NavLink to ='reviews'>Reviews</NavLink></li>
                    </ul>
<Outlet />
       
                </div>
            
            </div>
            }
        </>
    )
}