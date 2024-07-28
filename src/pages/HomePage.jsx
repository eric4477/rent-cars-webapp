import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import CarsRental from "../containers/CarsRental";
import Section1 from "../containers/Section1";

function HomePage() {
  return (
    <div className="pb-5">
      <NavBar />
      <Hero />
      <CarsRental />
      <Section1 />
    </div>
  );
}

export default HomePage;
