import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Categories from "./components/Categories/Categories";
import Error from "./components/NavBar/Error/Error";
import Home from "./pages/Home";
import Contact from "./components/Contact/Contact";
import { BACKGROUND_COLOR } from "./constants/data";
import { IconButton, Typography, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateScrollPostion } from "./state/actions/home";
// import {
//   FACEBOOK_LINK,
//   ZALO_LINK,
//   PHONE_LINK,
//   PHONE_NUMBER,
// } from "./constants/data";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// import Auth from "./components/Auth/Auth";

const user = JSON.parse(localStorage.getItem("profile"));

const emptyPanelAttribute = {
  country: "",
  state: "",
  city: "",
  category: "",
  subCategory: "",
  categoryName: "",
};
function App() {
  const dispatch = useDispatch();
  const [selectedPanel, setSelectedPanel] = useState(emptyPanelAttribute);
  const handleScroll = () => {
    const position = window.pageYOffset;
    // console.log(position);
    dispatch(updateScrollPostion(position));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Error />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route
            path="/categories"
            exact
            element={
              <Categories
                setSelectedPanel={setSelectedPanel}
                selectedPanel={selectedPanel}
              />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundColor: BACKGROUND_COLOR, marginTop: "20px" }}
    >
      <Typography fontSize={18}>
        {"Inspired by "}
        <Link
          color="inherit"
          target="_blank"
          href={`http://www.milliondollarhomepage.com/`}
        >
          milliondollarhomepage
        </Link>
        {"."}
      </Typography>
      {/* <Typography marginTop="40px" fontSize={18}>
        Số Điện Thoại: {PHONE_NUMBER}
      </Typography>
      <div className="contact-info">
        <IconButton color="inherit" size="medium" href={PHONE_LINK}>
          <LocalPhoneIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          size="medium"
          target="_blank"
          href={FACEBOOK_LINK}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton size="large" target="_blank" href={ZALO_LINK}>
          <img
            alt="Zalo Icon"
            src="/zalo-1-logo-black-and-white.png"
            width={26}
          />
        </IconButton>
      </div> */}

      <Typography fontSize={18}>
        Copyright © {new Date().getFullYear()} All Rights Reserved.
      </Typography>
    </div>
  );
}
