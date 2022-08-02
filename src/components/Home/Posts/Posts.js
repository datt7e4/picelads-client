import React from "react";
import { CircularProgress, Paper } from "@mui/material";
import { useSelector } from "react-redux";

import ModalCard from "../ModalCard/ModalCard";
import PixelsPanel from "../PixelsPanel/PixelsPanel";
import "./Posts.css";
function Posts() {
  const panelWidth = 100;
  const panelHeight = 100;
  const selectedColor = "black";

  const isLoading = useSelector((state) => state.isLoading);
  const posts = useSelector((state) => state.posts);

  //-------------Moved to App.js------------------
  // useEffect(() => {
  //   // console.log("effect call");
  //   dispatch(getPosts());
  // }, []);

  return (
    <div className="panel-container">
      <Paper elevation={4}>
        <div className="panel">
          {isLoading ? (
            <CircularProgress />
          ) : (
            posts.map((post) => <ModalCard key={post._id} post={post} />)
          )}
          <PixelsPanel
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
          />
        </div>
      </Paper>
    </div>
  );
}

export default Posts;
