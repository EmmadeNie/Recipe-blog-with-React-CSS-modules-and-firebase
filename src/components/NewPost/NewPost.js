import React, {useState} from "react";
import { Redirect } from "react-router";
import styles from "./NewPost.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Aux from "../../hoc/Auxiliary/Auxiliary";

import Spinner from "../UI/Spinner"

function NewPost () {
 const [isLoading, setIsLoading] = useState(false)
 const [postAdded, setPostAdded]= useState(false)
    const [postForm, setPostForm] = useState( {
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
      tags: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "add tag",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
    },
    )

const postDataHandler = (event) => {
    event.preventDefault();
setIsLoading(true);

    const postInfo = {
      title: postForm.title.value,
      caption: postForm.caption.value,
      author: postForm.author.value,
      description: postForm.description.value,
      prep: postForm.prep.value,
      cook: postForm.cook.value,
      servings: postForm.servings.value,
      ingredients: postForm.ingredients.value,
      utensils: postForm.utensils.value,
      tags: [postForm.tags.value],
      date: new Date(),
    };

    fetch("https://blog-5c8a0.firebaseio.com/posts.json", {
      method: "post",
      body: JSON.stringify(postInfo),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
setIsLoading(false)
setPostAdded(true);
        return response.json();
      })
      .then((res) => console.log(res)).catch(error=> setIsLoading(false))
  }
 

  const inputChangedHandler = (event, inputIdentifier) => {
  
    const updatedPostForm = {
      ...postForm,
    };
    const updatedFormElement = {
      ...updatedPostForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedPostForm[inputIdentifier] = updatedFormElement;
    setPostForm(updatedPostForm );
  };


    const formElementsArray = [];

    for (let key in postForm) {
      formElementsArray.push({
        id: key,
        config: postForm[key],
      });
    }

    // const handleType = (configType, formElementId) => {
    //   if (configType === "file") {
    //     return (event) => handleFile(event, formElementId);
    //   } else {
    //     return (event) => inputChangedHandler(event, formElementId);
    //   }
    // };
    

    let form = postAdded ? <Redirect to="/" />  : (<form onSubmit={postDataHandler} className={styles["ContactData"]}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event)=> inputChangedHandler(event,
              formElement.id
            )}
          />
        ))}
        <Button btnType="Success">Continue</Button>
      </form>)

     if (isLoading) {
      form = <Spinner />;
    }

    return <Aux>{form}</Aux>;
  }



export default NewPost