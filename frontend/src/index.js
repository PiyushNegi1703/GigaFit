import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { WorkoutContextProvider } from "./context/WorkoutContext";
import { UserWorkoutContextProvider } from "./context/UserWorkoutsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <UserWorkoutContextProvider>
          <App />
        </UserWorkoutContextProvider>
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
