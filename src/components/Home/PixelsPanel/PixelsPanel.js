import React, { useRef } from "react";
import "./styles/pixelsPanel.css";
import Row from "./Row";

function PixelsPanel({ width, height, selectedColor, setData }) {
  const panelRef = useRef();

  let rows = [];

  for (let i = 1; i <= height; i++) {
    rows.push(
      <Row
        key={i}
        width={width}
        selectedColor={selectedColor}
        row={i}
        setData={setData}
      />
    );
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
    </div>
  );
}
export default PixelsPanel;
