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
