import { lazy } from "react";
import { Routes, Route} from "react-router-dom";
import { Apps } from "./App.styled";

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
          </Route>
        </Routes>
    </Apps>
  );
};

