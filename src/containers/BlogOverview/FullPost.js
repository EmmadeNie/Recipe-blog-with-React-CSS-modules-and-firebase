import React, { Component } from "react";
import image from "../../assets/images/kipburger.jpeg";
import axios from "axios";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

class FullPost extends Component {
  componentWillMount() {
    return this.props.onGetFullPost(this.props.currentPostId);
  }

  render(props) {
    return (
      <Aux>
        <div className="full-post">
          <div className="full-post__image">
            {this.props.tagMode ? (
              <Aux>
                <input
                  className="infront-image"
                  type="text"
                  onChange={(event) =>
                    this.props.onChangeTagHandler(event.target.value)
                  }
                />
                <Button
                  icon="FiCheck"
                  text="save tags"
                  handleOnClick={() =>
                    this.props.onAddTag(
                      this.props.currentPostId,
                      this.props.newTag,
                      this.props.post
                    )
                  }
                />
              </Aux>
            ) : (
              <Button
                icon="FiEdit2"
                text="edit tags"
                handleOnClick={this.props.onToggleTagMode}
              />
            )}
            <img src={image} alt="kipburger" />
          </div>
          <div className="full-post__textbox">
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.author}</p>
            <p>
              <strong>bereiding: </strong>
              {this.props.post.prep} min || <strong>wachten: </strong>
              {this.props.post.cook} || <strong>personen: </strong>
              {this.props.post.servings}
            </p>
            <p>
              {" "}
              <strong>benodigdheden: </strong>
              {this.props.post.utensils}
            </p>
            <p>
              {" "}
              <strong>serveertips: </strong>
              {this.props.post.servetips}
            </p>

            <p>{this.props.post.description}</p>

            <Button
              icon="FiEdit2"
              text="edit posts"
              handleOnClick={this.props.onToggleEditMode}
            />
            {this.props.editMode ? <p>Hello</p> : <p>What?</p>}
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.fullPost.post,
    tagMode: state.fullPost.editTagMode,
    newTag: state.fullPost.newTag,
    currentPostId: state.display.currentPost,
    editPost: state.display.editMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditMode: () => dispatch(actionCreators.toggleEditMode()),
    onAddTag: (currentPostId, newTag, currentPost) =>
      dispatch(actionCreators.addTag(currentPostId, newTag, currentPost)),
    onToggleTagMode: () => dispatch(actionCreators.toggleTagMode()),
    onToggleEditMode: () => dispatch(actionCreators.toggleEditMode()),
    onChangeTagHandler: (onChangeValue) =>
      dispatch(actionCreators.onChangeTagHandler(onChangeValue)),
    onGetFullPost: (postId) => dispatch(actionCreators.getFullPost(postId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
