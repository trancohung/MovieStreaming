const Banner = ({ movie }) => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Explore</h1>
            <h2 className="font-light text-gray-300 py-4">What are you gonna watch today?</h2>
        
            <div className="relative w-full h-100 rounded-lg overflow-hidden">
                <img src={movie.image} alt={movie.movieName} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 max-w-md text-white">
                    <h2 className="text-4xl font-bold py-4">{movie.movieName}</h2>
                    <p className="text-sm text-gray-200 line-clamp-4 my-4">{movie.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
