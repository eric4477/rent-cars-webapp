import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import CarsRental from "../containers/CarsRental";
import Section1 from "../containers/Section1";
import Section2 from "../containers/Section2";

function HomePage() {
  return (
    <div className="pb-5">
      <NavBar />
      <Hero />
      <CarsRental />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default HomePage;
