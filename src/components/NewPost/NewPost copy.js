import React, { Component } from "react";
import styles from "./NewPost.module.css";
import axios from "axios";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Aux from "../../hoc/Auxiliary/Auxiliary";

class NewPost extends Component {
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

  postDataHandler = (event) => {
    event.preventDefault();
    console.log("ping", this.state.postForm);

    function ImageData(type, value, name) {
      this.type = type;
      this.value = value;
      this.name = name;
    }

    const imageData = new ImageData(
      "image",
      this.state.postForm.image.value,
      this.state.postForm.image.value.name
    );

    console.log(imageData);

    const post = {
      title: this.state.postForm.title.value,
      caption: this.state.postForm.caption.value,
      author: this.state.postForm.author.value,
      description: this.state.postForm.description.value,
      prep: this.state.postForm.prep.value,
      cook: this.state.postForm.cook.value,
      servings: this.state.postForm.servings.value,
      ingredients: this.state.postForm.ingredients.value,
      image: imageData,
    };
    axios
      .post("https://blog-5c8a0.firebaseio.com/posts.json", post)
      .then((response) => {
        console.log("pink", response);
      });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedPostForm = {
      ...this.state.postForm,
    };
    const updatedFormElement = {
      ...updatedPostForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedPostForm[inputIdentifier] = updatedFormElement;
    this.setState({ postForm: updatedPostForm });
  };

  handleFile = (event, inputIdentifier) => {
    console.log(event.target.files[0]);
    const updatedPostForm = {
      ...this.state.postForm,
    };
    const updatedFormElement = {
      ...updatedPostForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.files[0];
    updatedPostForm[inputIdentifier] = updatedFormElement;
    this.setState({ postForm: updatedPostForm });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.postForm) {
      formElementsArray.push({
        id: key,
        config: this.state.postForm[key],
      });
    }

    const handleType = (configType, formElementId) => {
      if (configType === "file") {
        return (event) => this.handleFile(event, formElementId);
      } else {
        return (event) => this.inputChangedHandler(event, formElementId);
      }
    };

    let form = (
      <form onSubmit={this.postDataHandler} className={styles["ContactData"]}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={handleType(
              formElement.config.elementConfig.type,
              formElement.id
            )}
          />
        ))}
        <Button btnType="Success">Continue</Button>
      </form>
    );

    // if (this.state.loading) {
    //   form = <Spinner />;
    // }

    return <Aux>{form}</Aux>;
  }
}

export default NewPost;
