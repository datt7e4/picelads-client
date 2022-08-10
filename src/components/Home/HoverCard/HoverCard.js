import React from "react";
import { boxStyle, boxStyleFixed } from "../../sharedStyles/sharedStyle";
import { useSelector } from "react-redux";
import ContentView from "./AvailableSlot";
import AvailableSlot from "./ContentView";

function BoxHover({ pixelIndex, post }) {
  const imageStyle = {
    borderRadius: 5,
    // backgroundColor: "#001529",
    backgroundColor: "black",
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
