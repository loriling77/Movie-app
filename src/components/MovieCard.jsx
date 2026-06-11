import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'
function MovieCard({movie}){

    const { addToFavorites, isFavorite, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)


    function onFavoriteLike(e){
        e.preventDefault()
        if(favorite){
            removeFromFavorites(movie.id)
            alert(`${movie.title} has been removed from favorites!`)
        } else {
            addToFavorites(movie)
            alert(`${movie.title} has been added to favorites!`)
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? 'favorited' : ''}`} onClick={onFavoriteLike}>
                        ❤
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
} 

export default MovieCard