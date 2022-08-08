import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const user = JSON.parse(localStorage.getItem("profile"));
const dis = !user ? true : false;
export default function RadioButtonsGroup({ setPerSelected }) {
  const handleChange = (e) => {
    setPerSelected(e.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel
          value="personal"
          disabled={dis}
          control={<Radio />}
          label="Personal"
          onChange={handleChange}
        />
      </RadioGroup>
    </FormControl>
  );
}
