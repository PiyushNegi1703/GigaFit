import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import TestPage from "./workoutPages/TestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/workout" element={<TestPage />} />
    </Routes>
  );
}

export default App;
