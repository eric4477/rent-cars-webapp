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

function App() {
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
