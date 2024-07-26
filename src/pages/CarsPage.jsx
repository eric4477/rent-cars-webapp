import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllCars } from "../api/fetchAllCars";
import SearchInput from "../components/SearchInput";
import CarCard from "../components/CarCard";

function CarsPage() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllCars();
        setAllCars(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  //variable for getting all pages
  const totalPages = Math.ceil(allCars.length / carsPerPage);
  //variable for returning current cars from the cars list
  const currentCars = allCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  //handle clicks functions

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="cars-page w-[85%] mx-auto py-12">
      <header>
        <p className="text-dark-gray ">
          <Link className="text-blue-600" to="/">
            Home
          </Link>
          /Cars
        </p>
      </header>
      <div className="all-cars-container">
        <div className="all-cars-header flex flex-col items-center mb-4">
          <div className=" bg-blue-100  px-7 py-2 rounded-lg mt-6 mb-2 text-center">
            <span className="text-sm text-dark-blue font-medium">
              POPULAR RENTAL DEALS
            </span>
          </div>
          <h1 className="text-[38px] text-light-black font-medium max-[555px]:text-4xl max-[655px]:mt-5 ">
            Most popular cars rental deals
          </h1>
        </div>
        <SearchInput />
        <div
          className="all-cars-list flex flex-row items-center flex-wrap justify-center 
         gap-x-10 gap-y-28 mt-14"
        >
          {currentCars.map((car) => (
            <CarCard car={car} key={car.id} loading={loading} error={error} />
          ))}
        </div>
        <div className="all-cars-footer flex justify-center pt-32">
          <div className="pagination flex flex-row items-center">
            <button
              className="px-4 py-2  bg-[#F7F8F9] border-[#E0E2E7] text-sm border-r-2 border
             text-light-black rounded-l-[4px] hover:text-dark-blue"
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`px-4 py-2 bg-[#F7F8F9] border-[#E0E2E7] text-sm border text-light-black transition ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-4 py-2  bg-[#F7F8F9] border-[#E0E2E7] text-sm  border
             text-light-black rounded-r-[4px] hover:text-dark-blue"
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsPage;
