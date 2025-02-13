const Banner = ({movie}) => {
    return (
        <div className="p-6">
            <img src={movie.image} alt={movie.movieName} className="rounded-lg w-full h-64 object-cover" />
            <h2 className="text-2xl font-bold mt-4">{movie.movieName}</h2>
            <p className="text-gray-400">{movie.description}</p>
        </div>
    );
}

export default Banner;