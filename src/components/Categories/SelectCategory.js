import React, { useEffect, useState } from "react";
import {
  Paper,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { getPanels } from "../../state/actions/panel";
import { categories } from "../../constants/categories";
import { countries } from "../../constants/countries";
function SelectCategory({ setPanels }) {
  const [category, setCategory] = useState({
    country: "United States",
    state: "",
    city: "",
    category: "",
    subCategory: "",
  });

  //call this function everytime the category changes
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPanels(category);
      // console.log(category);
      setPanels(data);
    };
    fetchData();
  }, [category]);

  // const handleSubmit = async () => {
  //   console.log(category);
  //   dispatch(getPanelId(category));
  //   const data = await getPanels(category);
  //   console.log(data);
  //   setPanels(data);
  //   dispatch({ type: CLEAR_ERROR });
  // };
  const handleChange = async (event) => {
    //reset state if user reselect something
    if (event.target.name === "country")
      setCategory({
        ...category,
        state: "",
        city: "",
        country: event.target.value,
      });
    else if (event.target.name === "state")
      setCategory({
        ...category,
        city: "",
        state: event.target.value,
      });
    else if (event.target.name === "category") {
      setCategory({
        ...category,
        subCategory: "",
        category: event.target.value,
      });
    } else
      setCategory({ ...category, [event.target.name]: event.target.value });
  };

  return (
    <Paper
      sx={{
        // margin: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "20px",
      }}
    >
      <FormControl sx={{ minWidth: 120, margin: 1 }}>
        <InputLabel id="countrySelectLabel">Country</InputLabel>
        <Select
          labelId="countrySelectLabel"
          id="countrySelect"
          value={category.country}
          label="Country"
          name="country"
          onChange={handleChange}
          autoWidth
        >
          {countries.map(({ code, name }) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>

        {/* STATE SELECT */}
      </FormControl>
      <FormControl sx={{ minWidth: 120, margin: 1 }}>
        <InputLabel id="stateSelectLabel">State</InputLabel>
        <Select
          labelId="stateSelectLabel"
          id="stateSelect"
          value={category.state}
          label="State"
          name="state"
          onChange={handleChange}
          autoWidth
        >
          {category.country &&
            countries
              .find((e) => e.name === category.country)
              .states.map(({ code, name }) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
        </Select>

        {/* CITY SELECT */}
      </FormControl>
      <FormControl sx={{ minWidth: 120, margin: 1 }}>
        <InputLabel id="citySelectLabel">City</InputLabel>
        <Select
          labelId="citySelectLabel"
          id="citySelect"
          value={category.city}
          label="City"
          name="city"
          onChange={handleChange}
          autoWidth
        >
          {category.state &&
            countries
              .find((e) => e.name === category.country)
              .states.find((e) => e.name === category.state)
              .cities.map(({ code, name }) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
      {/* CATEGORY SELECT */}
      <FormControl sx={{ minWidth: 120, margin: 1 }}>
        <InputLabel id="categorySelectLabel">Category</InputLabel>
        <Select
          labelId="categorySelectLabel"
          id="categorySelect"
          value={category.category}
          label="Category"
          name="category"
          onChange={handleChange}
          autoWidth
        >
          {categories.map(({ code, name }) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* SUB-CATEGORIES SELECT */}
      <FormControl sx={{ minWidth: 150, margin: 1 }}>
        <InputLabel id="subCategorySelectLabel">Sub-Category</InputLabel>
        <Select
          labelId="subCategorySelectLabel"
          id="subCategorySelect"
          value={category.subCategory}
          label="SubCategory"
          name="subCategory"
          onChange={handleChange}
          autoWidth
        >
          {category.category &&
            categories
              .find((e) => e.name === category.category)
              .sub.map(({ code, name }) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </Paper>
  );
}

export default SelectCategory;
