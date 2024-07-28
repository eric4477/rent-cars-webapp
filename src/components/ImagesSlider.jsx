import Slider from "react-slick";

const ImagesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="slider w-full overflow-x-hidden select-none pt-28 pb-20 max-[580px]:pb-0">
      <Slider {...settings}>
        <div className="slide">
          <img src="/landing-page/jaguar.png" alt="company-logo" />
        </div>
        <div className="slide">
          <img src="/landing-page/nissan.png" alt="company-logo" />
        </div>
        <div className="slide">
          <img src="/landing-page/volvo.png" alt="company-logo" />
        </div>
        <div className="slide">
          <img src="/landing-page/audi.png" alt="company-logo" />
        </div>
        <div className="slide">
          <img src="/landing-page/ac.png" alt="company-logo" />
        </div>
      </Slider>
    </div>
  );
};

export default ImagesSlider;
