import * as actionTypes from "./actionTypes";
import axios from "axios";

export const toggleEditMode = () => {
  return { type: actionTypes.TOGGLE_EDIT_MODE };
};

export const viewCurrentPost = (id) => {
  return { type: actionTypes.VIEW_CURRENT_POST, postId: id };
};

export const removeBackdrop = () => {
  return { type: actionTypes.REMOVE_BACKDROP };
};

export const setPosts = (posts) => {
  return { type: actionTypes.SET_POSTS, posts: posts };
};

export const failedFetchingPosts = () => {
  return { type: actionTypes.FAILED_FETCHING_POSTS };
};

export const initPosts = () => {
  return (dispatch) => {
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
