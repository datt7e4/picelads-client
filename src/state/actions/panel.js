import * as api from "../../api/index.js";
import { PANEL_ID, CLEAR_ID } from "../../constants/actionTypes.js";
import { ERROR } from "../../constants/errorTypes.js";

export const getPanelId = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await api.fetchPanelByCategory(searchQuery);

    //only dispatch if the searchquery return an object from the database
    if (data.length > 0) dispatch({ type: PANEL_ID, payload: data[0]._id });
    else {
      //console.log("Cant find anything in the database");
      dispatch({ type: ERROR, error: "Can't find anything in the database" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const clearPanelId = () => (dispatch) => {
  try {
    dispatch({ type: CLEAR_ID });
  } catch (error) {
    console.log(error);
  }
};
