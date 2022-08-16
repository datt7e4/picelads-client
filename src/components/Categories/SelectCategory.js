import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Paper,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import { getPanelId, clearPanelId } from "../../state/actions/panel";
import { categories, subCategories } from "../../constants/categories";
import { countries } from "../../constants/countries";
function SelectCategory() {
  const [category, setCategory] = useState({
    country: "",
    state: "",
    city: "",
    category: "",
    subCategory: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getPanelId(category));
    // dispatch({ type: CLEAR_ERROR });
  };
  const handleChange = (event) => {
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
    else setCategory({ ...category, [event.target.name]: event.target.value });
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
          {subCategories.map(({ code, name }) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: 5 }}
        onClick={handleSubmit}
      >
        Find
      </Button>
    </Paper>
  );
}

export default SelectCategory;
