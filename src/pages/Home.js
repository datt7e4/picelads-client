import React from "react";
import Hero from "../components/Home/Hero/Hero";
// import Panel from "./Panel/Panel";

import Panel from "../components/Home/Panel";
const ORIGINAL = process.env.REACT_APP_ORIGINAL_ID;

function Home() {
  return (
    <>
      <Hero title={"Starter Panel"} subTitle={"Let people know about you"} />
      <Panel id={ORIGINAL} />
    </>
  );
}

export default Home;
