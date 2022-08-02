import { combineReducers } from "redux";
import { isLoading, scroll } from "./home";
import { posts } from "./posts";

export const reducers = combineReducers({ posts, isLoading, scroll });
