import * as actionTypes from "../actions";

const initialState = {
  currentPost: null,
  editMode: false,
};

const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_EDIT_MODE:
      return { ...state, editMode: !state.editMode };
    case actionTypes.CURRENT_POST:
      return { ...state, currentPost: action.postId };
    case actionTypes.REMOVE_BACKDROP:
      return { currentPost: null, editMode: false };
    default:
      return state;
  }
};

export default displayReducer;
