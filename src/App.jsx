import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarsPage from "./pages/CarsPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/cars" element={<CarsPage />} />
          <Route path="/home/cars/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
