import { lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Apps } from "./App.styled";

/* import Cast from "./Cast/Cast"; */
/* import Reviews from "./Reviews/Reviews"; */
/* import MovieDetails from "../pages/MovieDetails/MovieDetails"; */
import NotFound from "../NotFound/NotFound";
import styled from "styled-components";
import { Layout } from "../Layout/Layout";


const Home = lazy(() => import('../../pages/Home/Home'))
const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'))
const Movies = lazy(() => import('../../pages/Movies/Movies'))
const Cast = lazy(() => import('../Cast/Cast'))
const Reviews = lazy(() => import('../Reviews/Reviews'))



export const App = () => {
  return (
    <Apps>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
<Route path="movies/:movieId" element={<MovieDetails />} >
        <Route path="cast" element={<Cast />} /> 
          <Route path="reviews" element={<Reviews />} />  
        </Route> 
           <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </Apps>
  );
};

