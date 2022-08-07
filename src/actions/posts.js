import {
  FETCH_ALL,
  FETCH_POST,
  START_LOADING,
  END_LOADING,
  DELETE,
  UPDATE,
  CREATE,
} from "../constants/actionTypes";
import { CLEAR_ERROR, CLOSE_MODAL, ERROR } from "../constants/errorTypes.js";
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

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: CLEAR_ERROR });
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, error: error.response.data });
    // console.log(error.message);
    console.log(error.response.data);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
