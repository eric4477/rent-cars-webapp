import Hero from "../containers/Hero";
import NavBar from "../components/NavBar";
import CarsRental from "../containers/CarsRental";
import Testimonials from "../containers/Testimonials";
import SectionOne from "../containers/SectionOne";
import SectionTwo from "../containers/SectionTwo";

function HomePage() {
  return (
    <div className="pb-5">
      <NavBar />
      <Hero />
      <CarsRental />
      <SectionOne />
      <SectionTwo />
      <Testimonials />
    </div>
  );
}

export default HomePage;
