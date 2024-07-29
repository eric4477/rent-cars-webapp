import { FaStar } from "react-icons/fa";
import TestimonialsSlider from "../components/TestimonialsSlider";
function Testimonials() {
  return (
    <section className="testimonials py-24">
      <div className="section-header flex flex-col items-center px-4">
        <div className=" bg-[#e3ebf4] px-7 py-2 rounded-lg mb-2 ">
          <span className="text-sm text-dark-blue font-medium">
            TESTIMONIALS
          </span>
        </div>

        <h1 className="text-[38px] max-w-[600px] leading-tight mb-10 text-light-black mt-1 font-medium max-[555px]:text-4xl max-[655px]:mt-5  ">
          What people say about us?
        </h1>
      </div>
      <TestimonialsSlider />
    </section>
  );
}

export default Testimonials;
