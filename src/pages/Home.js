import React from "react";
// import Panel from "./Panel/Panel";
import Hero from "../components/Home/Hero/Hero";
import { useDispatch } from "react-redux";
import { updateScrollPostion } from "../actions/home";
import Panel from "../components/Home/Panel";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
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
      <Hero />
      <Panel />
    </>
  );
}

export default Home;
