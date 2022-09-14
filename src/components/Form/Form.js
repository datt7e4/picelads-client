import React, { useState, useEffect } from "react";
import { Typography, Input, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost, deletePost } from "../../state/actions/posts";

import { CLEAR_ERROR, ERROR } from "../../constants/errorTypes";
import Error from "./Error";

const Form = ({
  currentId,
  setCurrentId,
  posX,
  posY,
  pixelIndex,
  panelId,
  setPost,
}) => {
  const [postData, setPostData] = useState({
    companyName: "",
    companyLink: "",
    companyPhone: "",
    posX: `${posX}px`,
    posY: `${posY}px`,
    desc: "",
    postHeight: "",
    postWidth: "",
    category: panelId,
    selectedFile: "",
  });

  const getArea = ({ width, height }) => {
    if (!width || !height) return 0;
    return width * height * 100;
  };

  const [size, setSize] = useState({ width: 0, height: 0 });
  var form_data = new FormData();

  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );
  const { error } = useSelector((state) => state.errors);
  const [dis, setDis] = useState(false);
  const handleDeleteButton = () => {
    dispatch(deletePost(currentId));
    setPost(null);
    setCurrentId(0);
  };

  //console.log(post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDis(true);
    dispatch({ type: CLEAR_ERROR });
    for (var key in postData) {
      form_data.append(key, postData[key]);
    }

    const height = parseInt(postData.postHeight);
    const width = parseInt(postData.postWidth);
    if (getArea(size) > 2500) {
      dispatch({
        type: ERROR,
        error: "Oversize, contact us for more infomation.",
      });
    } else if (!height || !width) {
      dispatch({ type: ERROR, error: "Width and height are required." });
    } else if (height < 1 || width < 1) {
      dispatch({
        type: ERROR,
        error: "Width and height need to be greater than 0.",
      });
    } else if (!postData.selectedFile) {
      dispatch({
        type: ERROR,
        error: "Cover photo is required.",
      });
    } else if (!postData.companyName) {
      dispatch({
        type: ERROR,
        error: "Company name is required.",
      });
    } else {
      //console.log("Width and height are required.");
      if (currentId === 0) {
        dispatch(createPost(form_data));
      } else {
        dispatch(updatePost(currentId, form_data));
      }
    }
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      {currentId ? (
        <Typography variant="h6">
          {`Editing "${postData.companyName}"`}
        </Typography>
      ) : (
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create New Post
          <br />
          at spot {pixelIndex} ({posX}, {posY})
        </Typography>
      )}

      {!post && (
        <>
          <Input
            type="number"
            fullWidth
            error={postData.postWidth === ""}
            onChange={(e) => {
              setSize({ ...size, width: parseInt(e.target.value) });
              setPostData({ ...postData, postWidth: `${e.target.value}0px` });
            }}
          />
          <span>Width (Per 10 pixels)</span>
          <Input
            type="number"
            fullWidth
            error={postData.postHeight === ""}
            onChange={(e) => {
              setSize({ ...size, height: parseInt(e.target.value) });
              setPostData({ ...postData, postHeight: `${e.target.value}0px` });
            }}
          />
          <span>Height (Per 10 pixels)</span>
          <Typography>{`Area: ${getArea(
            size
          )} pixels (Max 2500 pixels)`}</Typography>
          {getArea(size) > 2500 && (
            <Typography color={"error"}>Warning, oversize!</Typography>
          )}
        </>
      )}

      <TextField
        name="compName"
        variant="outlined"
        label="Title"
        margin="normal"
        fullWidth
        value={postData.companyName}
        error={postData.companyName === ""}
        helperText={postData.companyName === "" ? "Required!" : ""}
        onChange={(e) => {
          setPostData({ ...postData, companyName: e.target.value });
        }}
      />
      <TextField
        name="compLink"
        variant="outlined"
        label="Link"
        margin="normal"
        fullWidth
        value={postData.companyLink}
        onChange={(e) => {
          setPostData({ ...postData, companyLink: e.target.value });
        }}
      />
      <TextField
        name="compPhone"
        variant="outlined"
        label="Phone Number"
        fullWidth
        margin="normal"
        value={postData.companyPhone}
        onChange={(e) => {
          setPostData({ ...postData, companyPhone: e.target.value });
        }}
      />
      <TextField
        name="desc"
        variant="outlined"
        label="Detail"
        margin="normal"
        multiline
        minRows={4}
        fullWidth
        value={postData.desc}
        onChange={(e) => {
          setPostData({ ...postData, desc: e.target.value });
        }}
      />
      <div>
        Cover Photo Required
        <Input
          type="file"
          multiple={false}
          style={{ margin: 10 }}
          onChange={(e) => {
            setPostData({ ...postData, selectedFile: e.target.files[0] });
          }}
          error={postData.selectedFile === ""}
        />
      </div>
      {error && <Error error={error} setDis={setDis} />}
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        margin="10px"
        disabled={dis}
        fullWidth
      >
        Submit
      </Button>

      {post && (
        <Button
          size="small"
          fullWidth
          color="error"
          onClick={handleDeleteButton}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      )}
    </form>
  );
};

export default Form;
