import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [],
  isLoading: false,
  postAdded: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      const sortedPosts = action.posts.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      return { ...state, posts: sortedPosts, isLoading: false };
    case actionTypes.SET_LOADING:
      return { ...state, isLoading: action.value };
    case actionTypes.NEW_POST_INIT:
      return { ...state, postAdded: false };
    case actionTypes.NEW_POST_START:
      return { ...state, loading: true };
    case actionTypes.NEW_POST_SUCCESS:
      const newPost = {
        ...action.PostInfo,
        date: action.orderId,
      };
      return {
        ...state,
        loading: false,
        posts: state.posts.concat(newPost),
        postAdded: true,
      };
    case actionTypes.NEW_POST_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default postsReducer;
