
import MovieCard from "../components/MovieCard";

const NewRelease = ({onSelectMovie, movies}) => {
    
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold pb-4">New Release</h2>
            <div className="grid grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onClick={() => onSelectMovie(movie)}/>
                ))}
            </div>
        </div>
    );
}

export default NewRelease;