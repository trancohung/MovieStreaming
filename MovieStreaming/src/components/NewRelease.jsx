import { movieList } from "../data/movieList";
import MovieCard from "../components/MovieCard";

const NewRelease = ({onSelectMovie}) => {
    
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">New Release</h2>
            <div className="grid grid-cols-3 gap-4">
                {movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onClick={() => onSelectMovie(movie)}/>
                ))}
            </div>
        </div>
    );
}

export default NewRelease;