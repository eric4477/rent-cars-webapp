import SearchInput from "../components/SearchInput";
import CarCard from "../components/CarCard";
import { fetchFirstCars } from "../api/fetchFirstCars";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";

export default function CarsRental() {
  const [firstCars, setFirstCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFirstCars(4);
        setFirstCars(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="cars-rental-container w-[85%] mx-auto py-16">
      <SearchInput />
      <div className="cars-rental-header flex flex-col items-center">
        <div className=" bg-blue-100  px-7 py-2 rounded-lg mt-6 mb-2 text-center">
          <span className="text-sm text-dark-blue font-medium">
            POPULAR RENTAL DEALS
          </span>
        </div>
        <h1 className="text-[38px] text-light-black font-medium max-[555px]:text-4xl max-[655px]:mt-5 ">
          Most popular cars rental deals
        </h1>
      </div>
      <div
        className="cars-list flex flex-row items-center flex-wrap justify-between max-[1020px]:justify-center 
      gap-5 mt-14"
      >
        {firstCars.map((car) => (
          <CarCard car={car} key={car.id} loading={loading} error={error} />
        ))}
      </div>
      <div className="cars-rental-footer flex justify-center pt-20 text-[#4E4E4E]">
        <button
          className=" font-medium border border-[#E0E0E0] 
        rounded-md text-sm py-3 px-7 flex justify-center items-center gap-[5px]"
        >
          Show all vehicles <GoArrowRight className="text-[20px]" />
        </button>
      </div>
    </section>
  );
}
