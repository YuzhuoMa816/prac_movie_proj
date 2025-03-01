import "../css/Favorite.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const { favorites } = useMovieContext();
  console.log("INNNN" + favorites);
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Favorites movie</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className=""></div>
        <h2>NO favorate movie yet</h2>
      </div>
    );
  }
}

export default Favorites;
