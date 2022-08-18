import React from "react";
// import Panel from "./Panel/Panel";

import Panel from "../components/Home/Panel";
const ORIGINAL = process.env.REACT_APP_ORIGINAL_ID;

function Home() {
  return (
    <>
      <Panel id={ORIGINAL} />
    </>
  );
}

export default Home;
