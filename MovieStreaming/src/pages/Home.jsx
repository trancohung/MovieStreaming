import { useState } from "react";
import { movieList } from "../data/movieList";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import NewRelease from "../components/NewRelease";

const Home = () => {
    const [selectedMovie, setSelectedMovie] = useState(movieList[0]);
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <NavBar />
            <Banner movie={selectedMovie} />
            <NewRelease onSelectMovie={setSelectedMovie} />
        </div>
    );
}

export default Home;