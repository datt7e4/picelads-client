import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Paper } from "@mui/material";
import SelectCategory from "./SelectCategory";
import Panel from "../Home/Panel";
import Hero from "../Home/Hero/Hero";
import CategoriesIdButton from "./CategoriesIdButton";

function Categories() {
  const panelId = useSelector((state) => state.panel);
  const [panels, setPanels] = useState({});
  const [selectedPanel, setSelectedPanel] = useState("");
  // return <ComingSoon page={"Categories"} />;

  return (
    <Container maxWidth="xl">
      <SelectCategory setPanels={setPanels} />
      <CategoriesIdButton panels={panels} setSelectedPanel={setSelectedPanel} />
      {console.log(selectedPanel)}
      {panelId && (
        <>
          <Hero
            title={selectedPanel}
            // subTitle={"Let people know about you"}
          />
          <Panel id={panelId} title={selectedPanel} />
        </>
      )}
    </Container>
  );
}
export default Categories;
