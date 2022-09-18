import React from "react";
import "./styles/row.css";
import Pixel from "./Pixel";

export default function Row({ width, selectedColor, row, setData }) {
  let pixels = [];

  for (let i = 1; i <= width; i++) {
    pixels.push(
      <Pixel
        key={i}
        selectedColor={selectedColor}
        pixelIndex={i + width * (row - 1)}
        posY={row}
        posX={i}
        setData={setData}
      />
    );
  }

  return <div className="row">{pixels}</div>;
}
