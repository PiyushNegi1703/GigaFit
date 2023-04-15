import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserWorkoutContext } from "../hooks/useUserWorkoutContext";
import { MdOutlineClose } from "react-icons/md";
import toast from "react-hot-toast";

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};

const WorkoutModal = ({ type, modalOpen, setModalOpen }) => {
  const { user } = useAuthContext();
  const { dispatch } = useUserWorkoutContext();

  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You Must be Logged In");
      return;
    }

    const workout = { title, reps };

    const response = await fetch(`${process.env.REACT_APP_API}/userWorkouts`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      toast.error(error);
    }

    if (response.ok) {
      setTitle("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      toast.success("Workout Added Successfully");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      setModalOpen(false)
    }
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className="modal-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-container"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="close-button"
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>
            <form className="modal-form" onSubmit={handleSubmit}>
              <h1 className="formTitle">{type === "add" ? "ADD" : "UPDATE"} WORKOUT</h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  className={emptyFields.includes('title') ? 'error' : ''}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="reps">
                Reps
                <input
                  type="text"
                  id="reps"
                  value={reps}
                  className={emptyFields.includes('reps') ? 'error' : ''}
                  onChange={(e) => setReps(e.target.value)}
                />
              </label>
              <div className="buttonContainer">
                <button type="submit" className="modal-button">Add Workout</button>
                <button onClick={() => setModalOpen(false)} className="modal-button cancel">Cancel</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkoutModal;
