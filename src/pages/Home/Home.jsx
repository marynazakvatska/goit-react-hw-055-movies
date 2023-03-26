import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import { fetchAllMovies } from "components/fetchApi"
import { List, Title } from "./Home.styled"; 



export default function Home() {
    
    const location = useLocation();
    const [movies, setMovies] = useState(null);

 
    
    useEffect(() => {
        fetchAllMovies().then(data => data.results
        ).then(setMovies)
    }, [])

    return (
        <>
            <Title>Trending today</Title> 
            <ul>
                 {movies && movies.map(movie => <List key={movie.id}>
                     {movie.original_title ? <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.original_title}</Link> :
                         <Link to={`/movies/${movie.id}` } state={{from: location}}>{movie.name}</Link>}
                </List>)}
            </ul>
           
        </>
    )
}