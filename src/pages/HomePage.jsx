import Hero from "../containers/Hero";
import NavBar from "../components/NavBar";
import CarsRental from "../containers/CarsRental";
import Testimonials from "../containers/Testimonials";
import SectionOne from "../containers/SectionOne";
import SectionTwo from "../containers/SectionTwo";
import Contact from "../containers/Contact";

function HomePage() {
  return (
    <div className="max-w-[2000px] mx-auto">
      <NavBar />
      <Hero />
      <CarsRental />
      <SectionOne />
      <SectionTwo />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default HomePage;
