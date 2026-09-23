

// import React, { useState, useEffect } from 'react';
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";

// export default function MovieList({movieClicked,newMovie}) {
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState(null);
//     useEffect(()=>{
//         console.log("newMovie", newMovie)
//         setMovies(newMovies)
//         const newMovies = movies.map(movie =>
//             movie.id === newMovie.id ? {...newMovie}:movie
//         );
//         console.log(movies,newMovies);
        
//         // setMovies(newMovies);

//     },[newMovie])
//     useEffect(() => {
//         const fetchMovie = async () => {
//             try {
//                 const response = await fetch(
//                     'http://127.0.0.1:8000/api/movies/',
//                     {
//                         method: 'GET',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Authorization': 'Token 2b91d439d909018447820d6ccb05c2acbd39d31c',
//                         },
//                     }
//                 );

//                 console.log('Status:', response.status);

//                 if (!response.ok) {
//                     setError(`Error getting movies: ${response.status}`);
//                     return;
//                 }

//                 const result = await response.json();

//                 console.log('Movies:', result);

//                 setMovies(result);
//             } 
//             catch (error) {
//                 console.error('Fetch error:', error);
//                 setError('Could not connect to Django server');
//             }
//         };

//         fetchMovie();
//     }, []);

//     if (error) {
//         return <h1>{error}</h1>;
//     }

//     return (
//         <div>
            

//             {movies.map(movie => {
//                 return (
//                   <div key={movie.id} className='grid grid-cols-[1fr_auto_auto] gap-3 p-3'> 
//                     <h2 className='text-xl cursor-pointer' onClick={(evt)=>{movieClicked(movie,false)}}>{movie.title}</h2>
//                     <FaEdit onClick={(evt)=>{movieClicked(movie,true)}}/>
//                     <MdDelete/>
//                   </div>
//                 )
//             })}
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import API from '../services/api-service';
export default function MovieList({ movieClicked, newMovie, updatedMovie }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    // Update an existing movie when newMovie changes
    
    useEffect(()=>{
        // console.log("newMovie", newMovie)
        
        setMovies([...movies,newMovie])

        // console.log(movies,newMovies);
        
        // setMovies(newMovies);

    },[newMovie])

    useEffect(()=>{
        // console.log("newMovie", newMovie)
        const newMovies = movies.map(movie =>
            movie.id === updatedMovie.id ? {...updatedMovie}:movie
        );
         setMovies(newMovies)

        // console.log(movies,newMovies);
        
        // setMovies(newMovies);

    },[updatedMovie])
    
    // useEffect(() => {
    //     console.log("newMovie", newMovie);

    //     if (!newMovie) {
    //         return;
    //     }

    //     setMovies(currentMovies =>
    //         currentMovies.map(movie =>
    //             movie.id === newMovie.id
    //                 ? { ...newMovie }
    //                 : movie
    //         )
    //     );
    // }, [newMovie]);

    // useEffect(() => {
    //     console.log("newMovie", newMovie);

    //     if (!newMovie) {
    //         return;
    //     }

    //     setMovies(currentMovies =>
    //         currentMovies.map(movie =>
    //             movie.id === updatedMovie.id
    //                 ? { ...updatedMovie }
    //                 : movie
    //         )
    //     );
    // }, [updatedMovie]);

    // Get movies from Django
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(
                    'http://127.0.0.1:8000/api/movies/',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Token 2b91d439d909018447820d6ccb05c2acbd39d31c',
                        },
                    }
                );

                console.log('Status:', response.status);

                if (!response.ok) {
                    setError(`Error getting movies: ${response.status}`);
                    return;
                }

                const result = await response.json();

                console.log('Movies:', result);

                setMovies(result);
            }
            catch (error) {
                console.error('Fetch error:', error);
                setError('Could not connect to Django server');
            }
        };

        fetchMovie();
    }, []);

    if (error) {
        return <h1>{error}</h1>;
    }
    const removeMovie=(movieToBeRemoved)=>{
        const resp = API.removeMovie(movieToBeRemoved.id);
        if(resp){
            const newMovies = movies.filter(movie =>
            movie.id !== movieToBeRemoved.id 
        );
            setMovies(newMovies);

        }
        


    }
    return (
        <div>
            {movies.map(movie => {
                return (
                    <div
                        key={movie.id}
                        className='grid grid-cols-[1fr_auto_auto] gap-3 p-3'
                    >
                        <h2
                            className='text-xl cursor-pointer'
                            onClick={() => movieClicked(movie, false)}
                        >
                            {movie.title}
                        </h2>

                        <FaEdit
                            onClick={(evt) => movieClicked(movie, true)}
                        />

                        <MdDelete
                            onClick={(evt) => {removeMovie(movie)}}
 />
                    </div>
                );
            })}
        </div>
    );
}
