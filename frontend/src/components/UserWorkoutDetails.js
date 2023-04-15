import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserWorkoutContext } from "../hooks/useUserWorkoutContext";

const UserWorkoutDetails = ({ workout }) => {
  const { user } = useAuthContext();
  const { dispatch } = useUserWorkoutContext();

  const handleDelete = async (workout) => {
    if (!user) {
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_API}/userWorkouts/${workout._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <>
    <motion.div
      className="motion-div"
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: 'spring' }}
      >
      <div className="details">
        <p>{workout.title}</p>
        <p>x{workout.reps}</p>
      </div>
      <div className="workout-actions">
        <div className="icon" onClick={() => handleDelete(workout)}>
          <MdDelete />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default UserWorkoutDetails;
