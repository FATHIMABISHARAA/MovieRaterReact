import { useState } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details'
function App() {
  const [selectedMovie,setSelectedMovie]=useState(null)
  const movieClicked = movie =>{
    // console.log(movie)
    setSelectedMovie(movie);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie-Rater</h1>
        
      </header>
      <div className='grid grid-cols-2'>
         
          <MovieList movieClicked={movieClicked}/>
           <MovieDetails movie={selectedMovie}/>

        </div>
    </div>
  );
}

export default App;
