import {  useSearchParams, useLocation, Outlet, Link} from "react-router-dom";
import { fetchSearchMovies } from "components/fetchApi";
import { useState, useEffect} from "react";


const Movies = () => {
  
   /*   const location = useLocation(); */
    const [movies, setMovies] = useState([]);
   
const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("movieName") ?? "";
    console.log(movieName) 

/*  fetchSearchMovies(movieName).then(data => console.log(data))  */
    

useEffect(() => {
    fetchSearchMovies(movieName).then(setMovies)
    }, [movieName])


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (e.target.value === '') {
            return setSearchParams({})
        }
        setSearchParams({ movieName: form.elements.name.value }) 
         form.reset();
    } 


  return (
    <div>
    <form onSubmit={handleSubmit}>
            <input
        type="text" name="name"
               /*    value={movieName} */
       /*  onChange={e => setSearchParams({ movieName:e.target.value })}  */
          />
              <button type="submit">Search</button>
              </form>
         {/*  { movies && (<ul>
              {movies.map(movi => (
                  <li key={movi.id}>
                       <p>{movi.name}</p>
                    <Link to="movies/:movieId">
                        
                          <p>{movi.name}</p>
                      </Link> 
                  </li>
              ))}
          </ul>)} */}
         
    </div>
  );
};

export default Movies