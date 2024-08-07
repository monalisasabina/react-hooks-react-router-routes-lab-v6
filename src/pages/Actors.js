import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorsCard from "../components/ActorsCard";
function Actors() {

  const[actors,setActors] = useState([])

   useEffect(() => {
     fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error));
   })

  const actorList = actors.map((actor) => <ActorsCard key={actor.id} name={actor.name} movies={actor.movies}/>)

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
};

export default Actors;
