import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import axios from "axios";
import Post from "../../components/Post/Post";
import styles from "./BlogOverview.module.css";
import FullPost from "../FullPost/FullPost";
import Modal from "../../components/UI/Modal/Modal";
import AddPost from "../../components/AddPost/AddPost";

class BlogOverview extends Component {
  state = { posts: [], currentPost: null, editMode: false };

  componentDidMount() {
    axios
      .get("https://blog-5c8a0.firebaseio.com/posts.json")
      .then((res) => {
        const fetchedPosts = [];
        for (let key in res.data) {
          fetchedPosts.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, posts: fetchedPosts });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  viewPostHandler = (id) => {
    this.setState({ currentPost: id });
  };

  toggleEditMode = () => {
    const edit = this.state.editMode;
    this.setState({ editMode: !edit });
  };

  removeBackdropHandler = () => {
    this.setState({ currentPost: null });
    this.toggleEditMode();
  };

  editModeHandler = () => {
    this.toggleEditMode();
  };
  render() {
    let posts = this.state.posts.map((post) => {
      return (
        <Post
          style={{ textAlign: "center" }}
          post={post}
          key={post.id}
          viewPostHandler={() => this.viewPostHandler(post.id)}
        />
      );
    });

    let currentPost = this.state.currentPost && (
      <Modal removeBackdrop={this.removeBackdropHandler}>
        <FullPost
          currentId={this.state.currentPost}
          postData={this.state}
          editModeHandler={this.editModeHandler}
          editMode={this.state.editMode}
        />
      </Modal>
    );

    return (
      <Aux>
        {currentPost}
        <section className={styles["Posts"]}>
          {posts}
          <AddPost viewPostHandler={() => this.viewPostHandler("new-post")} />
        </section>
      </Aux>
    );
  }
}

export default BlogOverview;
