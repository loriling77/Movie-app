
import '../css/Favorites.css'
import {useMovieContext} from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites(){
    const {favorites} = useMovieContext()
    if(favorites.length > 0){
        return(
            <div>
                <h1>My Favorite Movies</h1>
            <div className="favorites-container">
                {favorites.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            </div>
        )

    }

    return(
        <>
        <div className="favorites-empty">
            <h1>No Favorite Movies Yet</h1>
            <p>Start adding movies to your favorites!</p>
        </div>
        </>
    )
}
export default Favorites