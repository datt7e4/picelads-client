import React from "react";
import { boxStyle, boxStyleFixed } from "../../sharedStyles/sharedStyle";
import { useSelector } from "react-redux";
import ContentView from "./AvailableSlot";
import AvailableSlot from "./ContentView";
import { BACKGROUND_COLOR } from "../../../constants/data";

function BoxHover({ pixelIndex, post }) {
  const imageStyle = {
    borderRadius: "10px",
    // backgroundColor: "#001529",
    backgroundColor: BACKGROUND_COLOR,
    height: 130,
    width: 130,
    objectFit: "contain",
  };
  const scrollPosition = useSelector((state) => state.scroll);
  const boxStyles = scrollPosition > 100 ? boxStyleFixed : boxStyle;

  return (
    <>
      {post ? (
        <AvailableSlot
          post={post}
          boxStyles={boxStyles}
          imageStyle={imageStyle}
        />
      ) : (
        <ContentView pixelIndex={pixelIndex} boxStyles={boxStyles} />
      )}
    </>
  );
}

export default BoxHover;
