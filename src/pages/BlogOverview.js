import React, { useEffect, useContext } from "react";

//CONTEXT
import {DisplayContext} from "../context/display-context"
import {PostsContext} from "../context/posts-context"

//COMPONENTS
import FullPost from "../components/FullPost";
import Aux from "../hoc/Auxiliary";
import Post from "../components/Post";
import Updated from "../components/UI/Updated";
import Modal from "../components/UI/Modal";

function BlogOverview(props) {
  const displayContext = useContext(DisplayContext);
  const postsContext = useContext(PostsContext);

  useEffect(() => {
    postsContext.getPosts()
  }, [displayContext.postDeleted]);

  const onRemoveBackdrop = () => {
    displayContext.updateCurrentPost(null);
    displayContext.toggleEditMode(false);
  };

  let postList = postsContext.posts.map((post) => {
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
    {displayContext.postDeleted && <Updated text="post deleted"/>}
      {currentFullPost}
      <section className="Posts">{postList}</section>
    </Aux>
  );
}

export default BlogOverview;
