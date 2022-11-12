import './MovieGridItem.css';
import resolveCover from '../../Services/coverService'

const MovieGridItem = ({ onClick, movie }) => {
    return (
        <div onClick={onClick} className="movieDesign">
            <div>{movie.title}</div>
            <div><img className="moviePoster" src={resolveCover(movie.poster_path)} alt={movie.title} /></div>
        </div>
    )
}

export default MovieGridItem
