import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchWorkouts } = useWorkoutContext();

  const logout = () => {
    // Removing user from storage
    sessionStorage.removeItem("user");

    // Dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchWorkouts({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
