import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [],
  isLoading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return { ...state, posts: action.posts, isLoading: false };
    case actionTypes.SET_LOADING:
      return { ...state, isLoading: action.value };
    default:
      return state;
  }
};

export default postsReducer;
