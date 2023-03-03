import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import "./index.css";
import GenderPage from "./pages/GenderPage";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TestPage from "./workoutPages/TestPage";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignupPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/gender" element={<GenderPage />} />
        <Route path="/workout" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
