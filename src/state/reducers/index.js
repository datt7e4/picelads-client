import { combineReducers } from "redux";
import { isLoading, scroll } from "./home";
import { posts } from "./posts";
import auth from "./auth";
import errors from "./errors";
import panel from "./panel";

export const reducers = combineReducers({
  posts,
  isLoading,
  scroll,
  auth,
  errors,
  panel,
});
