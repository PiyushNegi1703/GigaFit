import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import "./index.css";
import GenderPage from "./pages/GenderPage";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TestPage from "./workoutPages/TestPage";
import SuggestedPage from "./workoutPages/SuggestedPage";
import Googleauth from "./pages/Googleauth";
import Profile from "./pages/Profile";
import WeekPage from "./pages/WeekPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
// import DemoProfile from "./pages/DemoProfile";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
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
        <Route
          path="/gender"
          element={user ? <GenderPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/workout"
          element={user ? <TestPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/suggested"
          element={user ? <SuggestedPage /> : <Navigate to="/login" />}
        />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/week" element={<WeekPage />} />
        <Route path="/googleauth" element={<Googleauth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
