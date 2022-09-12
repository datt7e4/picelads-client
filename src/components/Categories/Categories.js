import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Paper } from "@mui/material";
import SelectCategory from "./SelectCategory";
import Panel from "../Home/Panel";
import Hero from "../Home/Hero/Hero";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import { getPanels } from "../../state/actions/panel";

function Categories({ selectedPanel, setSelectedPanel }) {
  const panelId = useSelector((state) => state.panel);
  const [panels, setPanels] = useState({});
  const emptyCategory = {
    country: "",
    state: "",
    city: "",
    category: "",
    subCategory: "",
    categoryName: "",
  };

  const keys = ["category", "subCategory"];

  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPanels(emptyCategory);
      console.log(data);
      console.log("effect called");
      setPanels(data);
    };
    fetchData();
  }, []);
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
          <Panel id={panelId} />
        </>
      )}
    </Container>
  );
}
export default Categories;
