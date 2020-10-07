export {
  initPosts,
  setPosts,
  failedFetchingPosts,
  setLoading,
  newPost,
  newPostSuccess,
  newPostFail,
  newPostStart,
  newPostInit,
} from "./posts";

export {
  toggleEditMode,
  viewCurrentPost,
  removeBackdrop,
} from "../actions/display";

export {
  getFullPost,
  getFullPostSuccess,
  getFullPostFailed,
  addTag,
  toggleTagMode,
  onChangeTagHandler,
} from "./fullPost";
