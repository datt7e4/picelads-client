import React from "react";
// import Panel from "./Panel/Panel";
import Hero from "../components/Home/Hero/Hero";
import { useDispatch } from "react-redux";
import { updateScrollPostion } from "../state/actions/home";
import Panel from "../components/Home/Panel";
import { useEffect } from "react";
const ORIGINAL = process.env.REACT_APP_ORIGINAL_ID;

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
      <Panel id={ORIGINAL} />
    </>
  );
}

export default Home;
