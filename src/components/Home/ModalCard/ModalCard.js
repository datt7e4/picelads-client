import React, { useState } from "react";

import "./ModalCard.css";

import HoverCard from "../HoverCard/HoverCard";
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../../../constants/errorTypes";

const user = JSON.parse(localStorage.getItem("profile"));

function ModalCard({ post, personalSelected, setCurrentId, setPost }) {
  const [openHover, setOpenHover] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    // setId(id);
    //setPost(post);
    setPost(post);
    setCurrentId(id);
    console.log(id);
    // setOpen(true);

    dispatch({ type: OPEN_MODAL });
  };

  const handleEnter = () => {
    setOpenHover(true);
  };

  const handleLeave = () => {
    setOpenHover(false);
  };

  return (
    <div>
      {openHover && (
        <div sx={{ position: "absolute" }}>
          <HoverCard post={post} />
        </div>
      )}

      <img
        src={`${process.env.REACT_APP_API}/${post.selectedFile}`}
        alt={post.companyName}
        style={{
          position: "absolute",
          left: post.posX,
          top: post.posY,
          cursor: "pointer",
          //------UI #1--------
          objectFit: "cover",

          //only visible if personalSelected !== personal || (_id == creator xor sub == creator)
          visibility:
            (user?.result._id !== post?.creator) ^
              (user?.result.sub !== post?.creator) ||
            personalSelected !== "personal"
              ? "visible"
              : "hidden",
          //------UI #2--------
          // objectFit: "contain",
          // backgroundColor: "#001529",
        }}
        width={post.postWidth}
        height={post.postHeight}
        onClick={() => handleClick(post._id)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
    </div>
  );
}

export default ModalCard;
