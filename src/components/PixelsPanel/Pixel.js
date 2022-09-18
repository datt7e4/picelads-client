import React, { useState } from "react";

import BoxHover from "../HoverCard/HoverCard";

import { OPEN_MODAL } from "../../constants/errorTypes";
import "./styles/pixel.css";

import { useDispatch } from "react-redux";

export default function Pixel({
  selectedColor,
  pixelIndex,
  posX,
  posY,
  setData,
}) {
  const dispatch = useDispatch();
  const [pixelColor, setPixelColor] = useState("#fff");
  const [openHover, setOpenHover] = useState(false);
  const handleOpen = () => {
    setData({
      posX: (posX - 1) * 10,
      posY: (posY - 1) * 10,
      pixelIndex: pixelIndex,
    });
    dispatch({ type: OPEN_MODAL });
  };

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
    </>
  );
}
