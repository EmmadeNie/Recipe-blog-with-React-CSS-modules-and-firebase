import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import Modal from "../../components/UI/Modal/Modal";
import AddPost from "../../components/AddPost/AddPost";
import * as actionTypes from "../../store/actions";

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

  removeBackdropHandler = () => {
    this.setState({ currentPost: null });
    this.toggleEditMode();
    this.props.history.push({ pathname: "/posts" });
  };

  editModeHandler = () => {
    this.toggleEditMode();
  };
  render(props) {
    let posts = this.state.posts.map((post) => {
      return (
        <Post
          style={{ textAlign: "center" }}
          post={post}
          key={post.id}
          viewPostHandler={() => this.props.viewCurrentPost(post.id)}
        />
      );
    });

    let currentPost = this.props.currentPost && (
      <Modal removeBackdrop={this.props.removeBackdrop}>
        <FullPost
          currentId={this.props.currentPost}
          postData={this.state}
          editModeHandler={this.props.toggleEditMode}
          editMode={this.props.editMode}
        />
      </Modal>
    );

    return (
      <Aux>
        {currentPost}
        <section className="Posts">
          {posts}
          <AddPost viewPostHandler={() => this.viewPostHandler("new-post")} />
        </section>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPost: state.currentPost,
    editMode: state.editMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditMode: () => dispatch({ type: actionTypes.TOGGLE_EDIT_MODE }),
    viewCurrentPost: (id) =>
      dispatch({ type: actionTypes.CURRENT_POST, postId: id }),
    removeBackdrop: () => dispatch({ type: actionTypes.REMOVE_BACKDROP }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogOverview);
