import { useAuthContext } from "../hooks/useAuthContext";
import "./Profile.css";
import bgImg from "../assets/login 2.png";
import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Profile = () => {
  const count = useRef(0);
  const [items, setItems] = useState([]);
  // const [popLayout, setPopLayout] = useState(false);
  const { user } = useAuthContext();
  // const [workout, setWorkout] = useState("");

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
              <input type="text" />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                count.current++;
                setItems([...items, count.current]);
              }}
              >
              Add item
            </motion.button>
              </div>

            <ul>
        <AnimatePresence>
          {items.map((id) => (
            <motion.li
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
              key={id}
              onClick={() => {
                const newItems = [...items];
                setItems(newItems);
              }}
            >Hello</motion.li>
          ))}
        </AnimatePresence>
      </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
