import { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import starIcon from "../../public/card/star.png";
import userIcon from "../../public/card/user.png";
import frameIcon from "../../public/card/Frame.png";
import conditionIcon from "../../public/card/condition.png";
import doorsIcon from "../../public/card/doors.png";
import {
  getRandomImg,
  getRandomRating,
  getRandomReviews,
} from "../constants/functions";

function CarCard({ car, loading, error }) {
  if (loading) return <div className="spinner" />;
  if (error) return <p>Error: {error.message}</p>;
  useEffect(() => {
    console.log(car);
  }, []);
  return (
    <div className="car-card shadow-custom-very-dark px-4 transition w-[265px] hover:scale-105 pt-7 pb-6 rounded-xl">
      <div className="car-image w-[210px] h-[105px] mb-4">
        <img className="w-full h-full" src={getRandomImg()} alt="car image" />
      </div>
      <h3 className="car-name text-light-black font-medium mb-1">
        {car.make} {car.model}
      </h3>
      <div className="flex flex-row items-center  text-xs">
        <div className="star">
          <img src={starIcon} alt="star" />
        </div>
        <span className="rating ml-1">{getRandomRating()}</span>
        <span className="text-light-gray ml-1">
          ({getRandomReviews()} reviews)
        </span>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-2 text-dark-gray text-xs mt-4">
        <div className="flex flex-row items-center gap-1">
          <span className="shrink-0">
            <img src={userIcon} alt="user" />
          </span>
          <span className="whitespace-nowrap">4 Passengers</span>
        </div>

        <div className="flex flex-row items-center gap-1 justify-self-end">
          <span>
            <img src={frameIcon} alt="frame" />
          </span>
          <span>{car.transmission}</span>
        </div>
        <div className="flex flex-row items-center pl-[1px] gap-[6px]">
          <span className="shrink-0">
            <img src={conditionIcon} alt="condition" />
          </span>
          <span className="whitespace-nowrap">Air Conditioning</span>
        </div>
        <div className="flex flex-row items-center gap-1 justify-self-end">
          <span>
            <img src={doorsIcon} alt="doors" />
          </span>
          <span>4 Doors</span>
        </div>
      </div>
      <div className="border bg-[#E0E0E0] my-5" />
      <div className="flex flex-row items-center justify-between pl-2 pr-1">
        <span className="text-base text-[#595959]">Price</span>
        <div className="flex items-center text-[#9C9C9C]">
          <span className="text-light-black font-semibold mr-1">
            ${car.price}
          </span>
          /day
        </div>
      </div>
      <div className="card-footer mt-4 pl-2 pr-1">
        <button
          className="py-[10px] text-sm px-4 flex flex-row items-center justify-center gap-2 text-white rounded-md w-full
         bg-dark-blue hover:bg-blue-600"
        >
          Rent Now <GoArrowRight className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}

export default CarCard;
