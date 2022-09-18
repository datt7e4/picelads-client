import React from "react";
import { Paper, Typography } from "@mui/material";
function AvailableSlot({ pixelIndex, boxStyles }) {
  return (
    <Paper elevation={1} sx={boxStyles}>
      <Typography
        fontWeight="bold"
        align="center"
        marginTop="60px"
        variant="h5"
      >
        Slot number {pixelIndex} is available.
      </Typography>
    </Paper>
  );
}

export default AvailableSlot;
