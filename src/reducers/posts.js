import { FETCH_ALL, FETCH_POST } from "../constants/actionTypes";
export const posts = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    default:
      return posts;
  }
};

export const post = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      return action.payload;

    default:
      return state;
  }
};
