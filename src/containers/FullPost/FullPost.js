import React, { Component } from "react";
import styles from "./FullPost.module.css";
import image from "../../assets/images/kipburger.jpeg";
import Axios from "axios";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import EditPost from "./EditPost/EditPost";

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
          <div className={styles["FullPost"]}>
            <div className={styles["Image"]}>
              <img src={image} alt="kipburger" />
            </div>
            <div className={styles["Textbox"]}>
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
              <button onClick={this.props.editModeHandler}>edit post</button>
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
