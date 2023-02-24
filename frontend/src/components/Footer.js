import footerImg from "../assets/nav-logo desk.png";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <hr style={{ width: "90%", border: "1px solid #363636" }} />
      </div>
      <footer
        style={{
          height: "15vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "50%" }}>
          <img src={footerImg} alt="" style={{ width: "30%" }} />
        </div>
        {/* <div> */}
        <h3 style={{ fontSize: "1.2em" }}>
          Social Media -{" "}
          <a
            href="https://github.com/PiyushNegi1703/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillGithub href="" fontSize="1.4em" />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/negi-2k05/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin href="" fontSize="1.4em" />
          </a>
        </h3>
        {/* </div> */}
      </footer>
    </>
  );
};

export default Footer;
