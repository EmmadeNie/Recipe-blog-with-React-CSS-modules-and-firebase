import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getFullPostSuccess = (postData) => {
  return { type: actionTypes.GET_FULL_POST_SUCCESS, post: postData };
};

export const getFullPostFailed = () => {
  return { type: actionTypes.GET_FULL_POST_FAILED };
};

export const getFullPost = (currentPostId) => {
  return (dispatch) => {
    axios
      .get(`https://blog-5c8a0.firebaseio.com/posts/${currentPostId}.json`)
      .then((response) => {
        console.log(response.data);
        dispatch(getFullPostSuccess(response.data));
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };
};

export const toggleTagMode = () => {
  return {
    type: actionTypes.TOGGLE_TAG_MODE,
  };
};

export const toggleEditMode = () => {
  return { type: actionTypes.TOGGLE_EDIT_MODE };
};

export const onChangeTagHandler = (onChangeValue) => {
  return { type: actionTypes.ONCHANGE_TAG_HANDLER, value: onChangeValue };
};

export const addTagSuccess = () => {
  return { type: actionTypes.ADD_TAG_SUCCESS };
};

export const addTagFailed = () => {
  return { type: actionTypes.ADD_TAG_FAILED };
};

export const addTag = (currentPostId, newTag, currentPost) => {
  return (dispatch) => {
    dispatch(toggleTagMode());
    const url = `https://blog-5c8a0.firebaseio.com/posts/${currentPostId}.json`;
    const tags = currentPost.tags.concat(newTag);
    const updatedPost = {
      ...currentPost,
      tags: tags,
    };
    axios
      .put(url, updatedPost)
      .then((response) => {
        dispatch(addTagSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(addTagFailed(error));
      });
  };
};
