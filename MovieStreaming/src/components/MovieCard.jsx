const MovieCard = ({movie, onClick}) => {

    return (
        <div onClick={onClick} className="cursor-pointer hover:scale-105 transition-transform">
            <img src={movie.image} alt={movie.movieName} className="rounded-lg w-full h-48 object-cover"/>
            <p className="text-center mt-2">{movie.movieName}</p>
        </div>
    );
}

export default MovieCard;