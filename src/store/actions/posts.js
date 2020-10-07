import * as actionTypes from "./actionTypes";
import axios from "axios";

// GET ALL POSTS
export const setPosts = (posts, seq) => {
  return { type: actionTypes.SET_POSTS, posts: posts, sequence: seq };
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

// NEW POST
export const newPostSuccess = (postInfo) => {
  return {
    type: actionTypes.NEW_POST_SUCCESS,
    postInfo: { ...postInfo },
  };
};

export const newPostFail = (error) => {
  return { type: actionTypes.NEW_POST_FAIL, error: error };
};

export const newPostStart = () => {
  return { type: actionTypes.NEW_POST_START };
};

export const newPost = (postInfo) => {
  return (dispatch) => {
    dispatch(newPostStart());
    axios
      .post("https://blog-5c8a0.firebaseio.com/posts.json", postInfo)
      .then((response) => {
        dispatch(newPostSuccess(postInfo));
      })
      .catch((error) => {
        console.log(error);
        dispatch(newPostFail(error));
      });
  };
};

export const newPostInit = () => {
  return {
    type: actionTypes.NEW_POST_INIT,
  };
};

//UPDATE POSTS
