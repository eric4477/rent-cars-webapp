import SearchInput from "../components/SearchInput";
import CarCard from "../components/CarCard";
import { fetchFirstCars } from "../api/fetchFirstCars";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { searchCars } from "../api/searchCars";
import { useNavigate } from "react-router-dom";

export default function CarsRental() {
  const [firstCars, setFirstCars] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFirstCars();
        setFirstCars(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // handle events functions
  const handleSearch = async (query) => {
    try {
      if (query.trim() === "") {
        setSearchResults([]);
      } else {
        const results = await searchCars(query);
        setSearchResults(results.slice(0, 2));
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleClick = () => {
    navigate("/home/cars");
  };

  return (
    <section className="cars-rental-container w-[85%] mx-auto py-16">
      <SearchInput searchCars={handleSearch} />
      <div className="cars-rental-header flex flex-col items-center">
        <div className=" bg-blue-100  px-7 py-2 rounded-lg mt-6  text-center">
          <span className="text-sm text-dark-blue font-medium">
            POPULAR RENTAL DEALS
          </span>
        </div>
        <h1 className="text-[38px] text-light-black mt-5 font-medium max-[555px]:text-4xl max-[655px]:mt-5 ">
          Most popular cars rental deals
        </h1>
      </div>
      <div
        className="cars-list flex flex-row items-center flex-wrap justify-center
       gap-10 mt-14"
      >
        {searchResults.length > 0
          ? searchResults.map((car) => (
              <CarCard car={car} key={car.id} loading={loading} error={error} />
            ))
          : firstCars.map((car) => (
              <CarCard car={car} key={car.id} loading={loading} error={error} />
            ))}
      </div>
      <div className="cars-rental-footer flex justify-center pt-20 text-[#4E4E4E]">
        <button
          className=" font-medium border border-[#E0E0E0] 
        rounded-md text-sm py-3 px-7 flex justify-center items-center gap-[5px]"
          onClick={handleClick}
        >
          Show all vehicles <GoArrowRight className="text-[20px]" />
        </button>
      </div>
    </section>
  );
}
