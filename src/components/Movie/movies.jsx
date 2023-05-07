import Movie from "./movie";
import React from "react";


const Movies = (props) => {
    const {movies} = props;

    return( 
        <div className="movies">
            {movies.map(movie => (<Movie key={movie.imdbID} {...movie}/>)
            )}
        </div>
    )

}

export default Movies;