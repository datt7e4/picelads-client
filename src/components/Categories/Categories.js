import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Paper } from "@mui/material";
import SelectCategory from "./SelectCategory";
import Panel from "../Home/Panel";
import Hero from "../Home/Hero/Hero";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import { getPanels } from "../../state/actions/panel";

function Categories() {
  const panelId = useSelector((state) => state.panel);
  const [panels, setPanels] = useState({});
  const [selectedPanel, setSelectedPanel] = useState("");
  const [category, setCategory] = useState({
    country: "",
    state: "",
    city: "",
    category: "",
    subCategory: "",
  });

  const keys = ["category", "subCategory"];

  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPanels(category);
      console.log("effect called");
      setPanels(data);
    };
    fetchData();
  }, [category]);
  return (
    <Container maxWidth="xl">
      <Paper sx={{ mt: 5, mb: 5 }}>
        <SearchBar setSearch={setSearch} />
        <CategoryList
          panels={panels}
          setSelectedPanel={setSelectedPanel}
          search={search}
        />
      </Paper>
      {/* <SelectCategory setPanels={setPanels} /> */}

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
