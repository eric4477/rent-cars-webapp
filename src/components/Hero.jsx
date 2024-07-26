import React from "react";

function Hero() {
  return (
    <section className="hero py-12 w-[92%] ml-auto flex justify-between flex-row max-[855px]:flex-col-reverse">
      <div className="background max-[700px]:h-[500px]">
        <img
          className="w-full h-full"
          src="/landing-page/Frame.png"
          alt="frame"
        />
      </div>
      <div className="flex flex-col pt-7 max-[855px]:pt-2">
        <h1
          className="text-5xl max-[1100px]:text-4xl max-[855px]:text-5xl max-[555px]:text-4xl  font-semibold w-[60%]
         max-[1300px]:w-[80%]"
        >
          Find, book and rent a car{" "}
          <span className="text-dark-blue">Easily</span>
        </h1>
        <p className="text-[18px] text-black mt-6 w-[55%] max-[1300px]:w-[90%]">
          Get a car wherever and whenever you need it with your IOS and Android
          device.
        </p>
        <div className="hero-links flex flex-row gap-3 items-center mt-7">
          <a className="inline-block" href="#">
            <img src="/landing-page/android.png" alt="play store" />
          </a>
          <a href="#">
            <img src="/landing-page/ios.png" alt="app store" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center scale-up">
        <img src="/landing-page/hero-img.png" alt="car" />
      </div>
    </section>
  );
}

export default Hero;
