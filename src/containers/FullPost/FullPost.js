import React, { Component } from "react";
import image from "../../assets/images/kipburger.jpeg";
import Axios from "axios";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import EditPost from "./EditPost/EditPost";
import { FiEdit2 } from "react-icons/fi";

class FullPost extends Component {
  state = { post: {} };

  componentWillMount() {
    Axios.get(
      `https://blog-5c8a0.firebaseio.com/posts/${this.props.currentId}.json`
    )
      .then((res) => this.setState({ post: res.data }))
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render(props) {
    let editPost = <EditPost postData={this.state.post} />;

    return (
      <Aux>
        {!this.props.editMode ? (
          <div className="full-post">
            <div className="full-post__image">
              <img src={image} alt="kipburger" />
            </div>
            <div className="full-post__textbox">
              <h1>{this.state.post.title}</h1>
              <p>{this.state.post.author}</p>
              <p>
                <strong>bereiding: </strong>
                {this.state.post.prep} min || <strong>wachten: </strong>
                {this.state.post.cook} || <strong>personen: </strong>
                {this.state.post.servings}
              </p>
              <p>
                {" "}
                <strong>benodigdheden: </strong>
                {this.state.post.utensils}
              </p>
              <p>
                {" "}
                <strong>serveertips: </strong>
                {this.state.post.servetips}
              </p>

              <p>{this.state.post.description}</p>
              <button className="btn-edit" onClick={this.props.editModeHandler}>
                <FiEdit2 color={"green"} /> <span>edit post</span>
              </button>
            </div>
          </div>
        ) : (
          <EditPost postData={this.state.post} />
        )}
      </Aux>
    );
  }
}

export default FullPost;
