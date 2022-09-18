import React, { useState } from "react";
import { Button, Modal, Box, IconButton } from "@mui/material";
import Auth from "../Auth/Auth";
import CloseIcon from "@mui/icons-material/Close";
import { outline, signinContainer } from "../sharedStyles/modalOutline";

function SignInButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMouseEnter = (e) => {
    e.target.style.color = "#FF7B00";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "#ffffff";
  };
  return (
    <>
      <Button
        key="Sign In"
        onClick={handleOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          my: 2,
          color: "white",
          display: "block",
          fontFamily: "inherit",
        }}
      >
        Sign In
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={outline}>
          <IconButton
            aria-label="close"
            // style={{ float: "right" }}
            onClick={handleClose}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <Box sx={signinContainer}>
            <Auth />
          </Box>

          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </>
  );
}

export default SignInButton;
