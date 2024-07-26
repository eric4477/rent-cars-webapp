import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarsPage from "./pages/CarsPage";
import { fetchAllCars } from "./api/fetchAllCars";

function App() {
  fetchAllCars();
  return (
    <div className="app relative max-w-[2000px] mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/cars" element={<CarsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
