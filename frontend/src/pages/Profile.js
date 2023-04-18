import { useAuthContext } from "../hooks/useAuthContext";
import "./Profile.css";
import bgImg from "../assets/login 2.png";
import start from "../assets/2535489_368756-PB2XF5-477-removebg-preview.png";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useUserWorkoutContext } from "../hooks/useUserWorkoutContext";
import UserWorkoutDetails from "../components/UserWorkoutDetails";
import WorkoutModal from "../components/WorkoutModal";

const Profile = () => {
  const { workouts, dispatch } = useUserWorkoutContext();
  const { user } = useAuthContext();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${process.env.REACT_APP_API}/userWorkouts`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })

      const json = await response.json()

      if(response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    if(user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div className="bg-container">
        <div className="bg-image">
          <img src={bgImg} alt="" className="bg-img" />
        </div>

        <div className="white-bg"></div>
      </div>

      <div className="profile-wrapper">
        <div className="profile-section">
          {user && (
            <>
              <div className="profile-pic-container">
                <img src={user.pic} alt="profile-pic" />
              </div>

              <h1>{user.username}</h1>
            </>
          )}

          <div className="Tracker">
            <div className="input-container">
                <motion.button style={{marginTop: "3vh"}} className="modal-button" whileTap={{ scale: 0.95 }} onClick={() => setModalOpen(true)}>
                  Add Workout
                </motion.button>
            </div>
            {workouts && workouts.length > 0 ?
            <div className="motion-div-container">
              <AnimatePresence>
                {workouts && workouts.map((e, i) => (
                  <UserWorkoutDetails workout={e} key={i} />
                  ))}
              </AnimatePresence>
            </div> :
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={start} alt="" style={{filter: "hue-rotate(295deg) saturate(4)", maxWidth: "350px"}} />
            </div>
                }
          </div>
          <WorkoutModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
