import SearchBar from "./SearchBar";

const NavBar = ({ onSearch }) => {


    return (
        <nav className="flex justify-between bg-gray-900 text-white px-6 py-4 items-center">
            <h1 className="text-4xl font-bold">Anonime</h1>
            <div className="flex justify-between w-1/4">
                <div>
                    <a href="#" className="text-[#868686] text-xl cursor-pointer">Home</a>
                </div>
                <div>
                    <a href="#" className="text-[#868686] text-xl cursor-pointer">List Anime</a>
                </div>
            </div>
            <SearchBar onSearch={onSearch} />
        </nav>
    );
}

export default NavBar;