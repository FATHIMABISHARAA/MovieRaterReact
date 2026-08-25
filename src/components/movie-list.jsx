

import React, { useState, useEffect } from 'react';

export default function MovieList({movieClicked}) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

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
            } catch (error) {
                console.error('Fetch error:', error);
                setError('Could not connect to Django server');
            }
        };

        fetchMovie();
    }, []);

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            

            {movies.map(movie => {
                return (
                  <div key={movie.id}> 
                    <h2 onClick={(evt)=>{movieClicked(movie)}}>{movie.title}</h2>
                  </div>
                )
            })}
        </div>
    );
}


