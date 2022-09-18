import React, { useState, useEffect } from "react";
import {
  Paper,
  Modal,
  Box,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { CLEAR_ERROR, CLOSE_MODAL } from "../../constants/errorTypes";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Form from "../Form/Form";
import PixelsPanel from "../PixelsPanel/PixelsPanel";
import Posts from "../Posts/Posts";
import Auth from "../Auth/Auth";
import RadioButtonsGroup from "./RadioButtonsGroup";
// import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import ModalView from "./ModalView";
import "./Panel.css";
import { getPostsByPanel } from "../../state/actions/posts";

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
  "@media(max-width: 900px)": {
    width: "60vw",
  },
  "@media(max-width: 700px)": {
    width: "80vw",
  },
  "@media(max-width: 500px)": {
    width: "90vw",
  },
  width: "500px",
  overflow: "auto",
  bgcolor: "background.paper",
  borderRadius: "10px",
  padding: 2,
};

const user = JSON.parse(localStorage.getItem("profile"));
const clearData = { posX: "", posY: "", pixelIndex: "" };

function Panel({ id }) {
  const panelWidth = 100;
  const panelHeight = 100;
  const selectedColor = "black";
  const [data, setData] = useState(clearData);
  const [personalSelected, setPerSelected] = useState("");
  const [currentId, setCurrentId] = useState(0);
  const [post, setPost] = useState(null);

  const { openModal } = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("effect call");
    dispatch(getPostsByPanel(id));
  }, [dispatch, id]);

  const handleClose = () => {
    setCurrentId(0);
    setPost(null);
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <>
      <Container maxWidth="xl">
        <RadioButtonsGroup setPerSelected={setPerSelected} />
        <div className="panel-container">
          <Paper elevation={4} className="panel">
            {/* <TransformWrapper>
          <TransformComponent> */}
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
            {/* </TransformComponent>
        </TransformWrapper> */}
          </Paper>
        </div>

        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {user || post ? (
            personalSelected === "personal" || !post ? (
              <Box sx={outline}>
                <IconButton aria-label="close" onClick={handleClose}>
                  <CloseIcon fontSize="large" />
                </IconButton>
                <Box sx={container}>
                  <Typography textAlign="center" variant="h6" component="h2">
                    Hello {user.result.name}
                    <Form
                      posX={data.posX}
                      posY={data.posY}
                      currentId={currentId}
                      setCurrentId={setCurrentId}
                      pixelIndex={data.pixelIndex}
                      panelId={id}
                      setPost={setPost}
                    />
                  </Typography>
                </Box>
              </Box>
            ) : (
              <ModalView post={post} handleClose={handleClose} />
            )
          ) : (
            <Box sx={outline}>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon fontSize="large" />
              </IconButton>
              <Box sx={container}>
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
            </Box>
          )}
        </Modal>
      </Container>
    </>
  );
}

export default Panel;
