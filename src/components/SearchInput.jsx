import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
function SearchInput({ searchCars }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCars(searchInput);
    setSearchInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="relative w-full rounded-md bg-white shadow-custom-dark 
      focus-within:outline-blue-400 focus-within:outline-2 focus-within:outline"
      >
        <CiLocationOn className="absolute text-3xl text-dark-gray font-bold top-1/2 transform -translate-y-1/2 left-4" />
        <input
          className="w-full py-[14px] max-[510px]:pr-32 outline-none pl-14 pr-52 rounded-md text-base text-black 
           focus:border-blue-400  placeholder:font-medium"
          type="text"
          placeholder="Search By Name"
          onChange={handleChange}
          value={searchInput}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-blue text-white px-9 py-2 
           hover:bg-blue-600 rounded-lg max-[510px]:px-4"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
