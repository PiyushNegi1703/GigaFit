import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ childern }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutContextProvider value={{ ...state, dispatch }}>
      {childern}
    </WorkoutContextProvider>
  );
};
