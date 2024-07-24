import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import CarsRental from "../containers/CarsRental";

function HomePage() {
  return (
    <div className="pb-5">
      <NavBar />
      <Hero />
      <CarsRental />
    </div>
  );
}

export default HomePage;
