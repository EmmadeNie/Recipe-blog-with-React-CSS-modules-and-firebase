import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setPosts = (posts) => {
  return { type: actionTypes.SET_POSTS, posts: posts };
};

export const failedFetchingPosts = () => {
  return { type: actionTypes.FAILED_FETCHING_POSTS };
};

export const setLoading = (val) => {
  return { type: actionTypes.SET_LOADING, value: val };
};

export const initPosts = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get("https://blog-5c8a0.firebaseio.com/posts.json")
      .then((res) => {
        const fetchedPosts = [];
        for (let key in res.data) {
          fetchedPosts.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(setPosts(fetchedPosts));
      })
      .catch((err) => {
        dispatch(failedFetchingPosts());
      });
  };
};
