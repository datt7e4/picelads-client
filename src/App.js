import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import Error from "./components/NavBar/Error/Error";
import Home from "./pages/Home";
import Contact from "./components/Contact/Contact";

import { IconButton, Typography, Link } from "@mui/material";
import {
  FACEBOOK_LINK,
  ZALO_LINK,
  PHONE_LINK,
  PHONE_NUMBER,
} from "./constants/data";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { getPosts } from "./actions/posts";

import "./App.css";

import Categories from "./components/Categories/Categories";
import Auth from "./components/Auth/Auth";

const user = JSON.parse(localStorage.getItem("profile"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("effect call");
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Error />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/categories" exact element={<Categories />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
function Footer() {
  return (
    <div className="footer">
      <Typography fontSize={18}>
        {"Inspired by "}
        <Link color="inherit" href={`http://www.milliondollarhomepage.com/`}>
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
