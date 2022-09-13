import React, { useEffect, useState } from "react";
import { Container, Paper } from "@mui/material";
import Panel from "../Home/Panel";
import Hero from "../Home/Hero/Hero";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import { getPanels } from "../../state/actions/panel";
import { useParams } from "react-router-dom";
import { getPanelDetail } from "../../api";

function Categories() {
  // const panelId = useSelector((state) => state.panel);
  const [selectedPanel, setSelectedPanel] = useState("");

  const { id } = useParams();
  const [panels, setPanels] = useState({});
  const emptyCategory = {
    country: "",
    state: "",
    city: "",
    category: "",
    subCategory: "",
    categoryName: "",
  };

  // const keys = ["category", "subCategory"];

  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPanels(emptyCategory);
      // console.log(data);
      // console.log("effect called");
      setPanels(data);
    };

    const fetchPanelDetail = async () => {
      if (id) {
        const { data } = await getPanelDetail(id);
        // console.log(data);
        setSelectedPanel(data);
      }
    };
    fetchData();
    fetchPanelDetail();
  }, []);
  return (
    <Container maxWidth="xl">
      {/* {console.log(id)} */}
      <Paper sx={{ mt: 5, mb: 5 }}>
        <SearchBar setSearch={setSearch} />
        <CategoryList
          panels={panels}
          setSelectedPanel={setSelectedPanel}
          search={search}
        />
      </Paper>
      {/* <SelectCategory setPanels={setPanels} /> */}

      {id && (
        <>
          <Hero
            title={selectedPanel.categoryName}
            subTitle={`${selectedPanel.city} -> ${selectedPanel.category} -> ${selectedPanel.subCategory}`}
          />
          <Panel id={id} />
        </>
      )}
    </Container>
  );
}
export default Categories;
