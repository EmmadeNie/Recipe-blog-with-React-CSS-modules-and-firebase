import * as actionTypes from "../../store/actions/actions";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_POSTS:
      return { ...state, editMode: !state.editMode };
    default:
      return state;
  }
};

export default postsReducer;
