import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch) => {
  await dispatch(fetchPosts());
};
// Await keyword is here because it makes sure the api request is complete
// before moving on

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// action creators must return plain JS objects with a type property
