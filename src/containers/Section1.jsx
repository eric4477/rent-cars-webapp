import ImageSlider from "../components/ImageSlider";
function Section1() {
  return (
    <section className="py-24">
      <div className="w-[85%] mx-auto ">
        <div className="section-container flex flex-col justify-center items-center">
          <div className=" bg-[#edf5fe] px-7 py-2 rounded-lg mb-2 text-center">
            <span className="text-sm text-dark-blue font-medium">
              HOW IT WORK
            </span>
          </div>
          <h1 className="text-[38px] text-center text-light-black mt-3 font-medium max-[555px]:text-4xl  max-[655px]:mt-5  ">
            Rent with following 3 working steps
          </h1>
          <div className="cards flex flex-row justify-center flex-wrap gap-24 mt-[68px]">
            <div className="card flex flex-col items-center text-center ">
              <div className="w-[112px] h-[112px] mb-7">
                <img
                  className="w-full h-full"
                  src="/landing-page/location.png"
                  alt="location"
                />
              </div>
              <h3 className="text-black text-[20px] font-medium mb-2">
                Choose location
              </h3>
              <p className="text-[#6D6D6D] font-medium text-sm w-[220px] ">
                Choose your and find your best car
              </p>
            </div>
            <div className="card flex flex-col items-center text-center">
              <div className="w-[112px] h-[112px] mb-7">
                <img
                  className="w-full h-full"
                  src="/landing-page/calender.png"
                  alt="location"
                />
              </div>
              <h3 className="text-black text-[20px] font-medium mb-2">
                Pick-up date
              </h3>
              <p className="text-[#6D6D6D] font-medium text-sm w-[220px] ">
                Select your pick up date and time to book your car
              </p>
            </div>
            <div className="card flex flex-col items-center text-center">
              <div className="w-[112px] h-[112px] mb-7">
                <img
                  className="w-full h-full"
                  src="/landing-page/car-icon.png"
                  alt="location"
                />
              </div>
              <h3 className="text-black text-[20px] font-medium mb-2">
                Book your car
              </h3>
              <p className="text-[#6D6D6D] font-medium text-sm w-[240px] ">
                Book your car and we will deliver it directly to you
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageSlider />
    </section>
  );
}

export default Section1;
