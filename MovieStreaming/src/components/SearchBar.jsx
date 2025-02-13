import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Search anime or movie"
            value={query}
            onChange={handleChange}
            className="bg-gray-600 px-4 py-2 outline-none w-1/3 rounded-4xl text-gray-300 text-xl"
        />
    );
}

export default SearchBar;