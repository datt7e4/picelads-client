import { PANEL_ID, CLEAR_ID } from "../../constants/actionTypes";
const panel = (state = "", action) => {
  switch (action.type) {
    case PANEL_ID:
      return action.payload;
    case CLEAR_ID:
      return "";
    default:
      return state;
  }
};
export default panel;
