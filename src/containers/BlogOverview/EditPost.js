import React, { Component } from "react";
import styles from "./EditPost.module.css";
import image from "../../assets/images/kipburger.jpeg";
import Axios from "axios";

class EditPost extends Component {
  state = {
    postForm: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Title",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      author: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Author",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      caption: {
        elementType: "input",
        elementConfig: {
          type: "textarea",
          placeholder: "Caption",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      description: {
        elementType: "textarea",
        elementConfig: {
          type: "textarea",
          placeholder: "Description",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      prep: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Prep",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      cook: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Cook",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      servings: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Servings",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      utensils: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Utensils",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      servetips: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Serve Tips",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },

      ingredients: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Ingredients",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      image: {
        elementType: "inputFile",
        elementConfig: {
          type: "file",
          placeholder: "Image",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
    },
  };
  render(props) {
    console.log("propsaa", this.props.postData);
    return (
      <div className={styles["FullPost"]}>
        <div className={styles["Image"]}>
          <img src={image} alt="kipburger" />
        </div>
        <div className={styles["Textbox"]}>
          <h1>{this.props.postData.title}</h1>
          <p>{this.props.postData.author}</p>
          <p>
            <strong>bereiding: </strong>
            {this.props.postData.prep} min || <strong>wwwachten: </strong>
            {this.props.postData.cook} || <strong>personen: </strong>
            {this.props.postData.servings}
          </p>
          <p>
            {" "}
            <strong>benodigdheden: </strong>
            {this.props.postData.utensils}
          </p>
          <p>
            {" "}
            <strong>serveertips: </strong>
            {this.props.postData.servetips}
          </p>

          <p>{this.props.postData.description}</p>
          <button onClick={this.props.editModeHandler}>edit post</button>
        </div>
      </div>
    );
  }
}

export default EditPost;
