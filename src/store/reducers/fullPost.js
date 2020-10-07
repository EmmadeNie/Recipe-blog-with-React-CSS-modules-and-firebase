import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  tagAdded: false,
  post: {},
  editTagMode: false,
  newTag: "",
};

const fullPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FULL_POST_SUCCESS:
      return { ...state, post: action.post };
    case actionTypes.TOGGLE_TAG_MODE:
      return {
        ...state,
        editTagMode: !state.editTagMode,
      };
    case actionTypes.ONCHANGE_TAG_HANDLER:
      return {
        ...state,
        newTag: action.value,
      };
    case actionTypes.ADD_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        tagAdded: true,
        editTagMode: false,
      };
    case actionTypes.ADD_TAG_FAILED:
      return { ...state, loading: false, tagAdded: false, editTagMode: false };
    default:
      return state;
  }
};

export default fullPostReducer;
