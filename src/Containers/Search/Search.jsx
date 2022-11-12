import React, { useState } from 'react'

import './Search.css'
import { searchMovie } from '../../Services/filmApi'
import MovieDetail from '../../Components/MovieDetail/MovieDetail'
import MovieGridItem from '../../Components/MovieGridItem/MovieGridItem'
import Logo from '../../Assets/search_logo.png';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState("");

    const handleSearch = (input) => {
        let text = input.target.value
        if(text === "") setMovies([])

        if(text.length > 2) {
            searchMovie(text)
                .then(res => setMovies(res.data.results))
                .catch(error => console.log(error))
            }
    }

    return (
        <div className="searchDesign">
            <div className='seachSide'>
                <input className="searchBar" type="search" placeholder="Search title" onChange={(text) => handleSearch(text)} />
                <div className="gridDesign">
                    { movies.length ? 
                        movies.map(movie => <MovieGridItem onClick={() => setMovieDetails(movie)} key={movie.id} movie={movie}/>) :
                        <img src={Logo} alt="Search" className="searchLogo"/> }
                </div>
            </div> 
                <div className="detailSide">
                    <MovieDetail movie={movieDetails}/>
                </div>  
        </div>
    )
}

export default Search;