import { AUTH, LOGOUT } from "../../constants/actionTypes";
import * as api from "../../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    //router("/");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    window.location.reload();
    //router("/");
  } catch (error) {
    console.log(error);
  }
};

export const signout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  window.location.reload();
};
