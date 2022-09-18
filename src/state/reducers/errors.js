import {
  ERROR,
  CLEAR_ERROR,
  CLOSE_MODAL,
  OPEN_MODAL,
} from "../../constants/errorTypes";
const errors = (state = { openModal: false, error: "" }, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.error };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    case CLOSE_MODAL:
      return { ...state, openModal: false };
    case OPEN_MODAL:
      return { ...state, openModal: true };
    default:
      return state;
  }
};

export default errors;
