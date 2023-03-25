import { useEffect, useState } from "react"

import { fetchhMovieCredits } from "components/fetchApi";
import { useParams } from "react-router-dom"



export default function Cast() {
      const { movieId } = useParams();
    const [actors, setActors] = useState([]);

console.log(movieId)

    /* console.log(fetchhMovieCredits(movieId)) */
  /*   fetchhMovieCredits(movieId).then(data=>console.log(data)) */

    useEffect(() => {
       
fetchhMovieCredits(movieId).then(data=>data.cast).then(setActors)
    }, [movieId])



    return (
        <>
            {actors && (
                <ul>
                    {actors.map(actor => (
                        <li key={actor.cast_id}>
                            <img src="" alt="" />
                            <p>{actor.name}</p>
                        </li>
                    ))}
                </ul>
        )}
        </>
    )
}