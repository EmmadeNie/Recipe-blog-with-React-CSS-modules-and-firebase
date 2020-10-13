import React, { useEffect, useContext } from "react";

//CONTAINERS
import FullPost from "./FullPost";

//COMPONENTS
import Aux from "../hoc/Auxiliary";
import Post from "./Post";
import Updated from "../components/UI/Updated";
import Modal from "./UI/Modal";
import {DisplayContext} from "../context/display-context"
import {PostsContext} from "../context/posts-context"

function TagCategory(props) {
  const displayContext = useContext(DisplayContext);
  const postsContext = useContext(PostsContext);

  const relatedPosts = postsContext.posts.filter(post=>post.tags.includes(props.tag))




  useEffect(() => {
    postsContext.getPosts()
  }, [displayContext.postDeleted]);

  const onRemoveBackdrop = () => {
    displayContext.updateCurrentPost(null);
    displayContext.toggleEditMode(false);
  };

  const postAdded = () => {};

  let postList = relatedPosts.map((post) => {

    return (
      <Post
        style={{ textAlign: "center" }}
        post={post}
        key={post.id}
        viewPostHandler={() => displayContext.updateCurrentPost(post.id)}
      />
    );
  });

  let currentFullPost = displayContext.currentPost && (
    <Modal removeBackdrop={onRemoveBackdrop}>
      <FullPost
        currentId={displayContext.currentPost}
        editModeHandler={displayContext.toggleEditMode}
        editMode={displayContext.editMode}
      />
    </Modal>
  );

  return (
    <Aux>
    <h1>{props.tag}</h1>
    {displayContext.postDeleted && <Updated text="post deleted"/>}
      {currentFullPost}
      <section className="Posts">{postList}</section>
    </Aux>
  );
}

export default TagCategory
