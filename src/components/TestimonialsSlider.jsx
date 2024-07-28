import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

function TestimonialsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      imgSrc: "/landing-page/girl.png",
      rating: 5,
      testimonial:
        "I have been using your services for 3 years. Your service is great, I will continue to use your service.",
      name: "Jenny Wilson",
      location: "From New York, US",
    },
    {
      id: 2,
      imgSrc: "/landing-page/Rectangle.png",
      rating: 5,
      testimonial:
        "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
      name: "Charlie Johnson",
      location: "From New York, US",
    },
    {
      id: 3,
      imgSrc: "/landing-page/girl.png",
      rating: 5,
      testimonial:
        "I have been using your services for 3 years. Your service is great, I will continue to use your service.",
      name: "Jenny Wilson",
      location: "From New York, US",
    },
  ];

  return (
    <div className="testimonials-slider-container mx-auto py-4">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card-container px-4 ">
            <div className="testemonial-card  flex flex-row gap-7 rounded-3xl bg-white  h-[380px] pr-2">
              <div className="card-img w-1/2">
                <img
                  className="w-full h-full object-cover rounded-l-2xl"
                  src={card.imgSrc}
                  alt="testimonial"
                />
              </div>
              <div className="card-info flex flex-col py-6">
                <div className="card-header flex flex-row gap-1 items-end mb-2 font-medium text-[#383838]">
                  <span className="text-5xl font-medium text-[#383838]">
                    {card.rating}.0
                  </span>
                  <span>stars</span>
                </div>
                <div className="rating flex flex-row items-center gap-1">
                  {[...Array(card.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[16px]" fill="gold" />
                  ))}
                </div>
                <p className="pt-8 pb-16 text-base h-[192px] max-w-[300px] text-light-black text-left">
                  {card.testimonial}
                </p>
                <div className="card-footer">
                  <h3 className="text-xl font-medium text-[#252525]">
                    {card.name}
                  </h3>
                  <p className="text-[#838383] text-sm">{card.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsSlider;
