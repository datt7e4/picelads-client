import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API,
});

// export const fetchPosts = () => axios.get(url);
export const fetchPostsByPanel = (id) => API.get(`/posts/panel/${id}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
