import { SCROLL } from "../../constants/actionTypes";

export const updateScrollPostion = (position) => (dispatch) => {
  try {
    dispatch({ type: SCROLL, payload: position });
  } catch (error) {
    console.log(error.message);
  }
};
