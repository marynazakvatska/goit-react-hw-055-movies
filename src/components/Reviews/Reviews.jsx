

import { useEffect, useState } from "react"
import { fetchhMovieReviews} from "components/fetchApi";
import { useParams } from "react-router-dom"



export default function Reviews() {
      const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

console.log(movieId)

   
  /*   fetchhMovieReviews(movieId).then(data=>console.log(data.results)) */

    useEffect(() => {
       
fetchhMovieReviews(movieId).then(data=>data.results).then(setReviews)
    }, [movieId])
  
    return (
    
        <>
            
            {reviews.length>0 ? (
                <ul>
                    {reviews.map(review => (
                        <li key={review.id}>
                    
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
        ): <p>No reviews for this movie</p>  }
        </>
    )
}