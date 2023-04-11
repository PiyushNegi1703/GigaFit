// import CalendarHeatmap from "react-calendar-heatmap"
import "react-calendar-heatmap/dist/styles.css";
// import Navbar from "../components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Profile.css";
// import DemoProfile from "./DemoProfile"
import bgImg from "../assets/login 2.png";
import HeatMap from "@uiw/react-heat-map";
import Navbar from "../components/Navbar";

const value = [
  { date: "2023/04/12", count: 2 },
  { date: "2023/05/01", count: 5 },
  { date: "2023/05/02", count: 5 },
  { date: "2023/05/13", count: 1 },
  { date: "2023/05/04", count: 11 },
  { date: "2023/05/08", count: 32 },
];

const date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${year}/0${month}/0${day}`

const Profile = () => {
  const { user } = useAuthContext();

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

          <div className="heatmap">
            <HeatMap
              value={value}
              width={1500}
              height={500}
              rectProps={{
                rx: 5
              }}
              legendCellSize={0}
              style={{ color: "#d9d9d9" }}
              startDate={new Date("2023/01/13")}
              endDate={new Date(currentDate)}
              panelColors={{
                0: "#d9d9d9",
                1: "#ca0024",
              }}
              rectSize={30}
              space={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
