import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    const fetchTerms = async () => {
      const response = await fetch(process.env.REACT_APP_GO_API);

      const json = await response.json();

      if (response.ok) {
        setTerms(json.posts);
        setLoding(false);
      }
    };

    fetchTerms();
  }, []);

  return (
    <>
      <Navbar />
      <div className="terms-wrapper">
        {loading ? (
          <div className="loader">
            <HashLoader color="#ca0024" size={80} />
          </div>
        ) : (
          <div className="terms-container">
            {terms &&
              terms.map((e, i) => {
                return (
                  <Accordion
                    key={i}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      color: "white",
                      minHeight: "8vh",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      width: "100%",
                      borderRadius: "0",
                      borderTop: "2px solid rgba(255, 255, 255, 0.2)",
                      borderLeft: "2px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      style={{
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.1em",
                          fontWeight: "600",
                          letterSpacing: "2px",
                          width: "33%",
                          flexShrink: 0,
                        }}
                      >
                        {e.Title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{ fontSize: "1em", letterSpacing: "2px" }}
                      >
                        {e.Body}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
