import React, { useState } from "react";
import { Button, Modal, Box, IconButton, Stack } from "@mui/material";
import Auth from "../Auth/Auth";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  "@media(max-width: 500px)": {
    width: "80%",
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
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
        <Box sx={style}>
          <Stack alignItems={"flex-end"}>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
            <Auth />
          </Stack>

          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </>
  );
}

export default SignInButton;
