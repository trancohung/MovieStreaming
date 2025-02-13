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
            className="bg-gray-600 p-2 outline-none w-1/3 rounded-2xl text-gray-300"
        />
    );
}

export default SearchBar;