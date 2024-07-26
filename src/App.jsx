import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app relative max-w-[2000px] mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
