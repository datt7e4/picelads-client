import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

// const API = axios.create({
//   baseURL: process.env.REACT_APP_API,
// });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// export const fetchPosts = () => axios.get(url);
export const fetchPostsByPanel = (id) => API.get(`/posts/panel/${id}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);

export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const fetchPanelByCategory = (searchQuery) =>
  API.get(
    `/category/search?country=${searchQuery.country}&state=${searchQuery.state}&city=${searchQuery.city}&category=${searchQuery.category}&subCategory=${searchQuery.subCategory}&categoryName=${searchQuery.categoryName}`
  );

export const fetchPanels = (searchQuery) =>
  API.get(
    `/category/searches?country=${searchQuery.country}&state=${searchQuery.state}&city=${searchQuery.city}&category=${searchQuery.category}&subCategory=${searchQuery.subCategory}&categoryName=${searchQuery.categoryName}`
  );

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
