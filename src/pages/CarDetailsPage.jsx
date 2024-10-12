import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import conditionIcon from "/card/condition.png";
import userIcon from "/card/user.png";
import frameIcon from "/card/Frame.png";
import doorsIcon from "/card/doors.png";
import { IoIosColorPalette } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";

function CarDetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(
          `https://myfakeapi.com/api/cars/${id}`
        );
        setCar(response.data.Car);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="spinner" />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="car-details-page py-12 max-w-[2500px] mx-auto">
      <header className="w-[85%] mx-auto">
        <p className="text-dark-gray ">
          <Link className="text-blue-600" to="/">
            Home
          </Link>
          /
          <Link className="text-blue-600" to="/home/cars">
            Cars
          </Link>
          <span>
            /{car.car} {car.car_model}
          </span>
        </p>
      </header>
      <div className="car-container flex flex-row justify-between gap-12 py-20  max-[1000px]:flex-col">
        <div className="car-img-container flex items-end relative pt-16 ">
          <img
            className="scale-up"
            src="/landing-page/audi-car.png"
            alt="car"
          />
        </div>
        <div className="car-info flex flex-col justify-start items-start px-10">
          <div className="car-info-header flex flex-col items-start justify-start">
            <div className=" bg-[#edf5fe] px-7 py-2 rounded-lg mb-2 ">
              <span className="text-sm text-dark-blue font-medium uppercase">
                why choose us
              </span>
            </div>

            <h1
              className="text-[38px] max-w-[600px] leading-tight text-light-black mt-3 
            font-medium max-[555px]:text-4xl max-[655px]:mt-5 "
            >
              We offer the best experience with our rental deals
            </h1>
          </div>
          <div className="car-features mt-16 flex flex-col justify-start items-start gap-3 text-dark-gray">
            <div className="flex flex-row items-center gap-1">
              <CiCalendarDate size={20} />
              <span className="whitespace-nowrap">{car.car_model_year}</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span className="shrink-0  w-[20px] h-[20px]">
                <img className="w-full h-full" src={userIcon} alt="user" />
              </span>
              <span className="whitespace-nowrap">
                {car.owners} {car.owners === 1 ? "owner" : "owners"}
              </span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <IoIosColorPalette size={20} />
              <span className="whitespace-nowrap">{car.car_color}</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span className="shrink-0  w-[20px] h-[20px]">
                <img className="w-full h-full" src={doorsIcon} alt="doors" />
              </span>
              <span className="whitespace-nowrap">2 Doors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsPage;
