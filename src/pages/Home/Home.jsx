import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import { fetchAllMovies } from "components/fetchApi"
import { List, Title } from "./Home.styled"; 



export default function Home() {
    
    const location = useLocation();
    const [movies, setMovies] = useState(null);

console.log(location)
    useEffect(() => {
        fetchAllMovies().then(data => {
            console.log(data)
            return data.results
        }).then(setMovies)
    }, [])

    return (
        <>
            <Title>Trending today</Title> 
            <ul>
                 {movies && movies.map(movie => <List key={movie.id}>
                     {movie.original_title ? <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link> :
                         <Link to={`/movies/${movie.id}`}>{movie.name}</Link>}
                </List>)}
            </ul>
           
        </>
    )
}