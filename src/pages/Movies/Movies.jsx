import {  useSearchParams, useLocation, Outlet, Link} from "react-router-dom";
import { fetchSearchMovies } from "components/fetchApi";
import { useState, useEffect, useParams } from "react";
import { Button, Input } from "./Movies.styled";


const Movies = () => {
    const [movies, setMovies] = useState([]);
 
const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("movieName") ?? "";


useEffect(() => {
    fetchSearchMovies(movieName).then(setMovies)
    }, [movieName])


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (e.target.value === '') {
            return
        }
        setSearchParams({ movieName: form.elements.name.value }) 
         form.reset();
    } 


  return (
    <div>
    <form onSubmit={handleSubmit}>
            <Input
        type="text" name="name"
          />
              <Button type="submit">Search</Button>
              </form>
          { movies && (<ul>
              {movies.map(oneMovie => (
                  <li key={oneMovie.id}>
                     
                    <Link to={`/movies/${oneMovie.id}`}>{oneMovie.title}</Link> 
                  </li>
              ))}
          </ul>)}
         
    </div>
  );
};

export default Movies