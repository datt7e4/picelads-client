import React, { useState } from "react";
import { Modal, Box, Typography, Grid, IconButton } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import PhoneIcon from "@mui/icons-material/Phone";

import "./ModalCard.css";

import HoverCard from "../HoverCard/HoverCard";

const user = JSON.parse(localStorage.getItem("profile"));

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "auto",
  width: 400,

  "@media(max-width: 500px)": {
    width: "80%",
  },
  bgcolor: "background.paper",
  p: 4,
  maxHeight: "60%",
  overflow: "auto",
  outline: "none",
  color: "black",
};

function ModalCard({ post, personalSelected }) {
  const [open, setOpen] = useState(false);
  const [openHover, setOpenHover] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClose = () => setOpen(false);

  const handleClick = (id) => {
    // setId(id);
    setOpen(true);
  };

  const handleEnter = () => {
    setOpenHover(true);
  };

  const handleLeave = () => {
    setOpenHover(false);
  };

  const postsVisibility = () => {
    if (user?.result._id !== post?.creator && personalSelected === "personal")
      return "hidden";
    if (user?.result.sub !== post?.creator && personalSelected === "personal")
      return "hidden";
    return "visible";
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, border: 0, padding: 0 }}>
          <Grid container>
            <Grid item={true} xs={12}>
              <img
                alt={post.companyName}
                src={`${process.env.REACT_APP_API}/${post.selectedFile}`}
                style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "cover",
                  display: isLoaded ? "none" : "block",
                }}
              />
              <img
                alt={post.companyName}
                src={`${process.env.REACT_APP_API}/${post.coverImageOriginal}`}
                onLoad={() => {
                  setIsLoaded(true);
                }}
                style={{
                  // height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  display: isLoaded ? "block" : "none",
                }}
              />
            </Grid>
            <Grid item={true} xs={12} style={{ padding: 20 }}>
              <div className="title">
                <Typography fontWeight="bold" variant="h5">
                  {post.companyName}
                </Typography>
                {post.companyLink && (
                  <IconButton
                    target="_blank"
                    color="primary"
                    size="small"
                    href={`${post.companyLink}`}
                  >
                    <LinkIcon fontSize="large" />
                  </IconButton>
                )}
              </div>
              {post.companyPhone && (
                <div className="phone-flex">
                  <IconButton size="small" href={`tel:${post.companyPhone}`}>
                    <PhoneIcon />
                  </IconButton>
                  <Typography fontSize={14}>{post.companyPhone}</Typography>
                </div>
              )}
              <Typography marginTop={2} variant="body1" component="h2">
                {post.desc}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalCard;
