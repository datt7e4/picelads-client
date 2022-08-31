import { Box, Select, TextField, InputLabel, FormControl } from "@mui/material";

import React from "react";

function SearchBar({ setSearch }) {
  return (
    <Box>
      <TextField
        sx={{ m: 1, minWidth: 400 }}
        name="search"
        variant="outlined"
        label="Search"
        //value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Location search selection */}
      {/* <FormControl sx={{ minWidth: 400, margin: 1 }}>
        <InputLabel id="locationLable">Location</InputLabel>
        <Select
          labelId="locationLable"
          name="location"
          label="Location"
          autoWidth
        />
      </FormControl> */}
    </Box>
  );
}

export default SearchBar;
