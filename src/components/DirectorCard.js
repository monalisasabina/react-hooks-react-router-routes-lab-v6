
function DirectorCard({name, movies}){

return(

    <article>
          <h2>{name}</h2>
          <ul>
             {movies.map((movie, index) => <li key={index}>{movie}</li>)}
          </ul>
          {/* What should go here? */}
   </article>

)
   
}
export default DirectorCard