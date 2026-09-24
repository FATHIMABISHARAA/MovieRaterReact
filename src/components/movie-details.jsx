

import React, { useState, useEffect } from 'react';
import { FaRegStar,FaStar  } from "react-icons/fa";
import API from '../services/api-service';
export default function MovieDetails({movie,updateMovie}) {
   const [ highlighted, setHighlighted ] = useState(-1)
   const [error, setError] = useState(null);
  
   const rateMovie=async(rate)=>{
        const rateMovie = async() =>{
            const resp= await API.rateMovie(movie.id,{stars: rate});
            if(resp) getNewMovie();
        
                }
                rateMovie()

   } 


    // try {
    //     const response = await fetch(
    //         `http://127.0.0.1:8000/api/movies/${movie.id}/rate_movie/`,
    //                 {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'Authorization': 'Token 2b91d439d909018447820d6ccb05c2acbd39d31c',
    //                     },
    //                     body:JSON.stringify({stars: rate})
    //                 }
    //             );

    //             console.log('Status:', response.status);

    //             if (!response.ok) {
    //                 setError('Error setting rating');
    //                 return;
    //             }

    //             const result = await response.json();
    //             setError("Succesfully Updated")
    //             getNewMovie()
    //             // console.log('Movies:', result);

    //             // setMovies(result);
    //         } catch{
    //             setError("Error setting ratings")
    //         }
        // }
    const getNewMovie=async()=>{
        const fetchMovie = async() =>{
            const resp= await API.getMovie(movie.id);
            if(resp) updateMovie(resp);
        
                }
                fetchMovie()

   } 
    return (
        // <div>
        //     <h1>{movie && movie.title}</h1>
        //     <h1>{movie && movie.description}</h1>

        // </div>
        <React.Fragment>
        {movie &&
            <div>
                <h1 className='text-2xl pb-4'>{ movie.title }</h1>
                <p className='text-xl pb-4'>{ movie.description}</p>
                <div className='flex'>
                    <FaStar className={movie.avg_ratings > 0 &&'text-orange-400'}/>
                    <FaStar className={movie.avg_ratings > 1 &&'text-orange-400'}/>
                    <FaStar className={movie.avg_ratings > 2 &&'text-orange-400'}/>
                    <FaStar className={movie.avg_ratings > 3 &&'text-orange-400'}/>
                    <FaStar className={movie.avg_ratings > 4 &&'text-orange-400'}/>
                    <p>({movie.avg_ratings})</p>
                </div>
                <h1 className='border-t-2 border-purple-600 mt-4'>Rate the movie</h1>
                <div className='flex text-3xl'>
                    { [...Array(5)].map((el,indx)=>{
                        return <FaStar key={indx} className={highlighted > indx &&'text-purple-600'}
                        onMouseEnter={() => setHighlighted(indx+1)} 
                        onMouseLeave={() => setHighlighted(-1)}
                        onClick={()=>rateMovie(indx+1)}/>

                    }) }
                </div>
                {error && <p>{error}</p>}

            </div>
 } </React.Fragment>
         
    );
   }
