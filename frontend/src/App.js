import { Route, Routes } from "react-router-dom";
import "./index.css";
import GenderPage from "./pages/GenderPage";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TestPage from "./workoutPages/TestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gender" element={<GenderPage />} />
      <Route path="/workout" element={<TestPage />} />
    </Routes>
  );
}

export default App;
