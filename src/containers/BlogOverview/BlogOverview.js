import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Post from "../../components/Post/Post";
import FullPost from "./FullPost";
import Modal from "../../components/UI/Modal/Modal";

import * as actionCreators from "../../store/actions/index";

import Updated from "../../components/UI/Updated";

class BlogOverview extends Component {
  componentDidMount() {
    this.props.onInitPosts();
  }

  render(props) {
    let posts = this.props.isLoading ? (
      <spinner />
    ) : (
      this.props.posts.map((post) => {
        return (
          <Post
            style={{ textAlign: "center" }}
            post={post}
            key={post.id}
            viewPostHandler={() => this.props.onViewCurrentPost(post.id)}
          />
        );
      })
    );

    let currentPost = this.props.currentPost && (
      <Modal removeBackdrop={this.props.onRemoveBackdrop}>
        <FullPost
          currentId={this.props.currentPost}
          postData={this.state}
          editModeHandler={this.props.onToggleEditMode}
          editMode={this.props.editMode}
        />
      </Modal>
    );

    return (
      <Aux>
        {currentPost}
        <section className="Posts">
          {this.props.postAdded && (
            <Updated newest={this.props.posts[0].title} />
          )}
          {posts}
        </section>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    currentPost: state.display.currentPost,
    editMode: state.display.editMode,
    isLoading: state.display.isLoading,
    postAdded: state.posts.postAdded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleEditMode: () => dispatch(actionCreators.toggleEditMode()),
    onViewCurrentPost: (id) => dispatch(actionCreators.viewCurrentPost(id)),
    onRemoveBackdrop: () => dispatch(actionCreators.removeBackdrop()),
    onInitPosts: () => dispatch(actionCreators.initPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogOverview);
