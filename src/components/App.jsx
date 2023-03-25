import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import MovieDetails from "./MovieDetails/MovieDetails";
/* import Home from "path/to/pages/Home";
import Movies from "path/to/pages/Movies"; */
import styled from "styled-components";
import fetchAllMovies from "./fetchApi";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div
      style={{
          fontSize: 40,
     /*    height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101' */
      }}
    >

       <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
       
      </nav>

         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
<Route path="/movies/:movieId" element={<MovieDetails />} >
        <Route path="cast" element={<Cast />} /> 
          <Route path="reviews" element={<Reviews />} /> 
      </Route>    
        </Routes>
    </div>
  );
};


/* https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>> */

/* api_key = edcdf711db36953031d9e29f76dede63 */

/* https://api.themoviedb.org/3/movie/550?api_key=edcdf711db36953031d9e29f76dede63  */  //пример запроса