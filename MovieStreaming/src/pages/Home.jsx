import { useState } from "react";
import { movieList } from "../data/movieList";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import NewRelease from "../components/NewRelease";

const Home = () => {
    const [selectedMovie, setSelectedMovie] = useState(movieList[0]);
    const [filteredMovies, setFilteredMovies] = useState(movieList);

    const handleSearch = (query) => {
        const filtered = movieList.filter((movie) => 
            movie.movieName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMovies(filtered);
    }
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <NavBar onSearch={handleSearch} />
            <Banner movie={selectedMovie} />
            <NewRelease onSelectMovie={setSelectedMovie} movies={filteredMovies} />
        </div>
    );
}

export default Home;