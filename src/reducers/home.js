import { START_LOADING, END_LOADING, SCROLL } from "../constants/actionTypes";

export const isLoading = (state = true, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case END_LOADING:
      return false;
    default:
      return state;
  }
};

export const scroll = (state = 0, action) => {
  switch (action.type) {
    case SCROLL:
      return action.payload;
    default:
      return state;
  }
};
