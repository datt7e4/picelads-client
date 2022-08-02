import React, { useState } from "react";
import { Box, Modal, Button, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FACEBOOK_LINK, ZALO_LINK } from "../../../constants/data";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Post Free Now</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Please Contact</h2>
          <Stack direction="row" justifyContent="center" spacing={1}>
            <IconButton
              color="primary"
              size="medium"
              target="_blank"
              href={FACEBOOK_LINK}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton size="large" target="_blank" href={ZALO_LINK}>
              <img alt="Zalo Icon" src="/zalo-icon.png" width={26} />
            </IconButton>
            {/* <IconButton
              color="primary"
              size="medium"
              target="_blank"
              href={INSTA_LINK}
            >
              <InstagramIcon fontSize="large" />
            </IconButton> */}
          </Stack>
          <h3 id="child-modal-title" align="center">
            Or
          </h3>
          <img alt="Zalo QR" src="/zalo-qr.jpg" width="100%" />

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ChildModal;
