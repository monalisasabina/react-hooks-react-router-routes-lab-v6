 
 function ActorsCard({name,movies}){

    return(
        <article>
              <h1>{name}</h1>
              <ul>
                 {movies.map((movie, index) => <li key={index}>{movie}</li>)}
              </ul>
            
       </article>

    
    )
    
 }

 export default ActorsCard