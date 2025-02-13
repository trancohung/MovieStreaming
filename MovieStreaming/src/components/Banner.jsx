const Banner = ({movie}) => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Explore</h1>
            <h2 className="font-light text-gray-300 py-4">What are you gonna watch today ?</h2>
            <img src={movie.image} alt={movie.movieName} className="rounded-lg w-full h-64 object-cover" />
            <h2 className="text-2xl font-bold mt-4">{movie.movieName}</h2>
            <p className="text-gray-400">{movie.description}</p>
        </div>
    );
}

export default Banner;