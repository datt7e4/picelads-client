import {
  FETCH_ALL,
  FETCH_POST,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

const ORIGINAL = process.env.REACT_APP_ORIGINAL_ID;
export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPostsByPanel(ORIGINAL);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
