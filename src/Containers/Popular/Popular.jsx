import React, { useState, useEffect } from 'react'

import './Popular.css'
import { getPopularMovies } from '../../Services/filmApi'
import MovieDetail from '../../Components/MovieDetail/MovieDetail'
import MovieGridItem from '../../Components/MovieGridItem/MovieGridItem'

const Popular = () => {
    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState("");

    useEffect(() => {
        if (!movies.length) loadPopularMovies()
    }, [movies])

    const loadPopularMovies = () => {
        getPopularMovies()
                .then(res => setMovies(res.data.results))
                .catch(error => console.log(error))
    }
  
    return (
        <div className="moviesDesign">
            <div className="gridSide">
                { movies.map(movie => <MovieGridItem onClick={() => setMovieDetails(movie)} key={movie.id} movie={movie}/>)}
            </div>
            <div className="detailSide">
                <MovieDetail movie={movieDetails}/>
            </div>
        </div>
    )
};

export default Popular
