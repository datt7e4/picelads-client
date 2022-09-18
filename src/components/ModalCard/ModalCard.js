import React, { useState } from "react";

import "./ModalCard.css";

import HoverCard from "../HoverCard/HoverCard";
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../../constants/errorTypes";

const user = JSON.parse(localStorage.getItem("profile"));

function ModalCard({ post, personalSelected, setCurrentId, setPost }) {
  const [openHover, setOpenHover] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    setPost(post);
    setCurrentId(id);
    dispatch({ type: OPEN_MODAL });
  };

  const handleEnter = () => {
    setOpenHover(true);
  };

  const handleLeave = () => {
    setOpenHover(false);
  };

  return (
    <>
      {openHover && (
        <div sx={{ position: "absolute" }}>
          <HoverCard post={post} />
        </div>
      )}

      <img
        src={`${process.env.REACT_APP_API}/${post.selectedFile}`}
        alt={post.companyName}
        width={post.postWidth}
        height={post.postHeight}
        style={{
          position: "absolute",
          left: post.posX,
          top: post.posY,
          cursor: "pointer",
          //These UIs will not make any different because the image already crop to the right size
          //------UI #2--------
          // objectFit: "contain",
          // backgroundColor: "black",
          //------UI #1--------
          //objectFit: "contain",

          //only visible if personalSelected !== personal || (_id == creator xor sub == creator)
          visibility:
            (user?.result._id !== post?.creator) ^
              (user?.result.sub !== post?.creator) ||
            personalSelected !== "personal"
              ? "visible"
              : "hidden",
        }}
        onClick={() => handleClick(post._id)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
    </>
  );
}

export default ModalCard;
