import { useEffect, useState } from "react"

import { fetchhMovieCredits } from "components/fetchApi";
import { useParams } from "react-router-dom"



export default function Cast() {
      const { movieId } = useParams();
    const [actors, setActors] = useState([]);


    useEffect(() => {
       
fetchhMovieCredits(movieId).then(data=>data.cast).then(setActors)
    }, [movieId])



    return (
        <>
            {actors.length>0 ? (
                <ul>
                    {actors.map(actor => (
                        <li key={actor.id}>
                         <img
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : `https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`}
                alt={actor.name}
              />
                            <p>{actor.name}</p>
                        </li>
                    ))}
                </ul>
        ) : <p>There is not images of the actors</p>}
        </>
    )
}