import React, { useReducer, useEffect, useState } from "react";

//CONTAINERS
import FullPost from "./FullPost";

//COMPONENTS
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Post from "../../components/Post/Post";
// import Updated from "../../components/UI/Updated";
import Modal from "../../components/UI/Modal/Modal";
import post from "../../components/Post/Post";

const postsReducer = (currentPosts, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.posts;
    default:
      throw new Error("Should not get there");
  }
};

function BlogOverview(props) {
  const [posts, dispatch] = useReducer(postsReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch("https://blog-5c8a0.firebaseio.com/posts.json")
      .then((response) => {
        setIsLoading(true);
        return response.json();
      })
      .then((res) => {
        const fetchedPosts = [];
        for (let key in res) {
          fetchedPosts.push({
            ...res[key],
            id: key,
          });
        }
        dispatch({ type: "SET_POSTS", posts: fetchedPosts });
      })
      .catch((err) => {
        // dispatch(failedFetchingPosts());
      });
  }, []);


  const onViewCurrentPost = (id) => {
    setCurrentPost(id);
  };

  const onRemoveBackdrop = () => {
    setCurrentPost(null);
    setEditMode(false);
  };

  const onToggleEditMode = () => setEditMode((prevMode) => !prevMode);

  const postAdded = () => {};

  let postList = posts.map((post) => {

    return (
      <Post
        style={{ textAlign: "center" }}
        post={post}
        key={post.id}
        viewPostHandler={() => onViewCurrentPost(post.id)}
      />
    );
  });

  let currentFullPost = currentPost && (
    <Modal removeBackdrop={onRemoveBackdrop}>
      <FullPost
        currentId={currentPost}
        editModeHandler={onToggleEditMode}
        editMode={editMode}
      />
    </Modal>
  );

  return (
    <Aux>
      {currentFullPost}
      <section className="Posts">{postList}</section>
    </Aux>
  );
}

export default BlogOverview;
