import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
function SearchInput() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="relative w-full rounded-md bg-white shadow-custom-dark 
      focus-within:outline-blue-400 focus-within:outline-2 focus-within:outline"
      >
        <CiLocationOn className="absolute text-3xl text-dark-gray font-bold top-1/2 transform -translate-y-1/2 left-4" />
        <input
          className="w-[80%] max-[760px]:w-[70%] max-[510px]:w-full py-[14px] outline-none pl-14 rounded-l-md text-black 
           focus:border-blue-400  placeholder:font-medium"
          type="text"
          placeholder="Search By Name"
          onChange={handleChange}
          value={searchInput}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-blue text-white px-8 py-2 
           hover:bg-blue-600 rounded-lg max-[510px]:hidden"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
