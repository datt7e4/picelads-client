import React, { useState } from "react";
import { Paper, Modal, Box, Typography } from "@mui/material";
import { CLEAR_ERROR, CLOSE_MODAL } from "../../constants/errorTypes";
import { useDispatch, useSelector } from "react-redux";

import Form from "../Form/Form";
import PixelsPanel from "./PixelsPanel/PixelsPanel";
import "./Posts/Posts.css";
import Posts from "./Posts/Posts";
import Auth from "../Auth/Auth";

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
};
const user = JSON.parse(localStorage.getItem("profile"));
const clearData = { posX: "", posY: "", pixelIndex: "" };

function Panel() {
  const panelWidth = 100;
  const panelHeight = 100;
  const selectedColor = "black";
  const [data, setData] = useState(clearData);
  const [currentId, setCurrentId] = useState(0);
  const { openModal } = useSelector((state) => state.errors);

  const dispatch = useDispatch();
  const handleClose = () => {
    setCurrentId(0);
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <div className="panel-container">
      <Paper elevation={4}>
        <div className="panel">
          <Posts />
          <PixelsPanel
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
            setData={setData}
          />
        </div>
      </Paper>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {user ? (
            <Typography textAlign="center" variant="h6" component="h2">
              Hello {user.result.name}
              <Form
                posX={data.posX}
                posY={data.posY}
                currentId={currentId}
                setCurrentId={setCurrentId}
                pixelIndex={data.pixelIndex}
              />
            </Typography>
          ) : (
            <>
              <Typography
                textAlign="center"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Slot {data.pixelIndex} is available. <br />
                Please Sign in or Sign up to post.
              </Typography>
              <Auth />
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Panel;