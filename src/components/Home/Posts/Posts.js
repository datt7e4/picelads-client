import React from "react";
import { CircularProgress } from "@mui/material";
import ModalCard from "../ModalCard/ModalCard";
import { useSelector } from "react-redux";
function Posts() {
  const isLoading = useSelector((state) => state.isLoading);
  const posts = useSelector((state) => state.posts);
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        posts.map((post) => <ModalCard key={post._id} post={post} />)
      )}
    </>
  );
}

export default Posts;
