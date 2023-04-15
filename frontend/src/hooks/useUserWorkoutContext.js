import { UserWorkoutContext } from "../context/UserWorkoutsContext";
import { useContext } from "react";

export const useUserWorkoutContext = () => {
    const context = useContext(UserWorkoutContext)

    if(!context) {
        throw Error('useUserWorkoutContext must be used inside an WorkoutContextProvider')
    }

    return context
}