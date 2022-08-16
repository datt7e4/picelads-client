import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import ComingSoon from "../NavBar/Countdown/ComingSoon";
import SelectCategory from "./SelectCategory";
import Panel from "../Home/Panel";
import Hero from "../Home/Hero/Hero";

function Categories() {
  const panelId = useSelector((state) => state.panel);
  // return <ComingSoon page={"Categories"} />;

  return (
    <Container maxWidth="xl">
      <SelectCategory />
      <Hero />
      {panelId && <Panel id={panelId} />}
    </Container>
  );
}
export default Categories;
