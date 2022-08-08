import React, { useState } from "react";
import { Paper, Modal, Box, Typography, Stack } from "@mui/material";
import { CLEAR_ERROR, CLOSE_MODAL } from "../../constants/errorTypes";
import { useDispatch, useSelector } from "react-redux";

import Form from "../Form/Form";
import PixelsPanel from "./PixelsPanel/PixelsPanel";
import Posts from "./Posts/Posts";
import Auth from "../Auth/Auth";
import RadioButtonsGroup from "./RadioButtonsGroup";

import "./Panel.css";
import ModalView from "./ModalView";

const formStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  "@media(max-width: 500px)": {
    width: "80%",
  },
  maxHeight: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflow: "auto",
  p: 4,
};

const user = JSON.parse(localStorage.getItem("profile"));
const clearData = { posX: "", posY: "", pixelIndex: "" };

function Panel() {
  const panelWidth = 100;
  const panelHeight = 100;
  const selectedColor = "black";
  const [data, setData] = useState(clearData);
  const [personalSelected, setPerSelected] = useState("");
  const [currentId, setCurrentId] = useState(0);
  const [post, setPost] = useState(null);

  const { openModal } = useSelector((state) => state.errors);

  const dispatch = useDispatch();
  const handleClose = () => {
    setCurrentId(0);
    setPost(null);
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <div className="panel-container">
      <Stack>
        <RadioButtonsGroup setPerSelected={setPerSelected} />
        <Paper elevation={4}>
          <div className="panel">
            <Posts
              setCurrentId={setCurrentId}
              personalSelected={personalSelected}
              setPost={setPost}
            />
            <PixelsPanel
              width={panelWidth}
              height={panelHeight}
              selectedColor={selectedColor}
              setData={setData}
            />
          </div>
        </Paper>
      </Stack>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {user ? (
          personalSelected === "personal" || !post ? (
            <Box sx={formStyle}>
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
            </Box>
          ) : (
            <ModalView post={post} />
          )
        ) : (
          <Box sx={formStyle}>
            <Typography
              textAlign="center"
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontWeight="bold"
            >
              Slot {data.pixelIndex} is available. <br />
              Please sign in or sign up to post.
            </Typography>
            <Auth />
          </Box>
        )}
      </Modal>
    </div>
  );
}

export default Panel;
