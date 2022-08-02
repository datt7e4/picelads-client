import React, { useState } from "react";
import { Typography, Modal, Box } from "@mui/material";
import ChildModal from "./ChildModal";
import BoxHover from "../HoverCard/HoverCard";

import "./styles/pixel.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function Pixel({ selectedColor, pixelIndex }) {
  const [pixelColor, setPixelColor] = useState("#fff");
  const [open, setOpen] = useState(false);
  const [openHover, setOpenHover] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function changeColorOnHover() {
    setPixelColor(selectedColor);
    setOpenHover(true);
  }

  function resetColor() {
    setPixelColor("#fff");
    setOpenHover(false);
  }

  return (
    <>
      {openHover && <BoxHover pixelIndex={pixelIndex} />}
      <div
        className="pixel"
        onClick={handleOpen}
        onMouseEnter={changeColorOnHover}
        onMouseLeave={resetColor}
        style={{ backgroundColor: pixelColor }}
      ></div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Pixel at slot {pixelIndex} is selling.
          </Typography>
          <ChildModal />
        </Box>
      </Modal>
    </>
  );
}
