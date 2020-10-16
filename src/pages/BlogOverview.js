import React, { useEffect, useContext } from "react";

//CONTEXT
import {PostsContext} from "../context/posts-context"
import { DisplayContext } from "../context/display-context"

//COMPONENTS
import FullPost from "../components/FullPost/FullPost";
import Aux from "../hoc/Auxiliary";
import Post from "../components/Post";
import Updated from "../components/UI/Updated";
import Modal from "../components/UI/Modal"

//STYLING
import {Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

//STYLING FUNCTIONS
const useStyles = makeStyles({
 helloThereStyle: {
   fontStyle: 'oblique',
   fontSize: "16px",
   
 },
 buttonStyle: {
   fontStyle: 'oblique',
 }
});

function BlogOverview(props) {
  const classes = useStyles();
  const postsContext = useContext(PostsContext);
    const displayContext = useContext(DisplayContext);
  const relatedPosts = props.tag ? postsContext.posts.filter(post=>post.tags.includes(props.tag)) : postsContext.posts

  useEffect(() => {
    postsContext.getPosts()
  }, [displayContext.postDeleted]);

  const onRemoveBackdrop = () => {
    displayContext.updateCurrentPost(null);
    displayContext.toggleEditMode(false);
  };

  let postList = relatedPosts.map((post) => {
    return (
      <Post
        style={{ textAlign: "center" }}
        post={post}
        key={post.id}
        viewPostHandler={()=>displayContext.updateCurrentPost(post.id)}
      />
    );
  });

  let currentFullPost = displayContext.currentPost && (
    <Modal removeBackdrop={onRemoveBackdrop}>
      <FullPost />
    </Modal>
  );

  return (
    <Aux>

    <Button className={classes.buttonStyle} fullWidth color="primary">{props.tag} </Button>
    {displayContext.postDeleted && <Updated text="post deleted"/>}
      {currentFullPost}
      <section className="Posts">{postList}</section>
    </Aux>
  );
}

export default BlogOverview;
