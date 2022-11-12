import './MovieDetail.css';
import resolveCover from '../../Services/coverService'

const MovieDetail = ({movie}) => {
    return(
        movie ? (
            <div className='movieDetailDesign' key={movie.id}>
                <div className='detailTitle'>{movie.title} </div>
                <div><img className="detailPoster" src={resolveCover(movie.poster_path)} alt={movie.title} /></div>
                <div className='details'> <b>Genre:</b> {movie.genre_ids.map(id => genres[id]).join(', ')}</div>
                <div className='details'> <b>Year:</b> {movie.release_date}</div>
                <div className='details'> <b>Plot:</b> {movie.overview}</div>
            </div>
        ) : (<div className='emptyDetail'> </div>)
    )
}

const genres = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',         
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'   
}

export default MovieDetail