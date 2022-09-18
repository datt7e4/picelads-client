import React, { useState } from "react";
import { Button, Modal, Box, IconButton } from "@mui/material";
import Auth from "../Auth/Auth";
import CloseIcon from "@mui/icons-material/Close";

const outline = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  padding: "10px 2px",
};
const container = {
  maxHeight: "80vh",
  "@media(min-width: 1000px)": {
    maxWidth: "900px",
  },
  maxWidth: "90vw",
  overflow: "auto",
  bgcolor: "background.paper",
  borderRadius: "10px",
  padding: 1,
};
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
          <Box sx={container}>
            <Auth />
          </Box>

          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </>
  );
}

export default SignInButton;
