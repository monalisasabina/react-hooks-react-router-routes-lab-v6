import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from'react-router-dom';

function Movie() {

  const [movie, setMovie] = useState([])

   const params =useParams()
   const movieId =params.id
   
   useEffect(() =>{
       fetch(`http://localhost:4000/movies/${movieId}`)
       .then(r => r.json())
       .then(data => setMovie(data))
       .catch(error => console.error(error))
      }, [movieId])
    
      
      // const genres = movie.genres.map(genre => <span key={genre}>{genre}</span>)


  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>Time:{movie.time}</p>
        {/* {genres} */}
      </main>
    </>
  );
};

export default Movie;
