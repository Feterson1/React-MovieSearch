import React from "react";
import Movies from "../../components/Movie/movies";
import Preloader from "../../components/preloader/preloader";
import { Search } from "../../components/Search/search";


class Main extends React.Component {

    state = {
        movies: [],
    }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=c2cca006&s=matrix&page=2')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies(str){
        fetch(`http://www.omdbapi.com/?apikey=c2cca006&s=${str}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))

    }

   

    render(){
        const {movies}  = this.state;
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>

                {
                    movies.length? (<Movies movies={this.state.movies}/>) :  (<Preloader/>)
                }

            </main>
    
        )
    }
    

    
}

export default Main;