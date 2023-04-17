import { createContext, useReducer } from "react";

export const UserWorkoutContext = createContext()

export const userWorkoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'UPDATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((workout) => workout._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const UserWorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userWorkoutsReducer, {
        workouts: null
    })

    return (
        <UserWorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </UserWorkoutContext.Provider>
    )
}