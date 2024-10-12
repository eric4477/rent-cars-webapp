import Hero from "../containers/Hero";
import NavBar from "../components/NavBar";
import CarsRental from "../containers/CarsRental";
import Testimonials from "../containers/Testimonials";
import SectionOne from "../containers/SectionOne";
import SectionTwo from "../containers/SectionTwo";
import Contact from "../containers/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <CarsRental />
      <SectionOne />
      <SectionTwo />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
