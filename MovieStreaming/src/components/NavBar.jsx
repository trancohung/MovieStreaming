import SearchBar from "./SearchBar";

const NavBar = ( {onSearch}) => {
    

    return (
        <nav className="flex justify-between bg-gray-900 text-white px-6 py-4 items-center">
            <h1 className="text-2xl font-bold">Anonime</h1>
            <div>
                <a href="#" className="text-gray-400 px-6 cursor-pointer">Home</a>
                <a href="#" className="text-gray-400 px-6 cursor-pointer">List Anime</a>
            </div>
            <SearchBar onSearch={onSearch} />
        </nav>
    );
}

export default NavBar;