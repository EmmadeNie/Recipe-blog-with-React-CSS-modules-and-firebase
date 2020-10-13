import React, {createContext, useState, useReducer, useContext} from 'react';
import {DisplayContext} from "./display-context"

export const InputContext = createContext({
    postForm: {}, 
postNewPost: ()=> {},
formElementsArray: []

});

const InputReducer = (currentPosts, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.posts;
    default:
      throw new Error("Should not get there");
  }
};

const InputContextProvider = props => {
    const [onPostForm, setPostForm] = useState( {
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
    const displayContext = useContext(DisplayContext);

    const onFormElementsArray = [];
    for (let key in onPostForm) {
      onFormElementsArray.push({
        id: key,
        config: onPostForm[key],
      });
    }

    console.log(onFormElementsArray)

const postDataHandler = (event) => {
    event.preventDefault();
displayContext.toggleIsLoading(true)

    const postInfo = {
      title: onPostForm.title.value,
      caption: onPostForm.caption.value,
      author: onPostForm.author.value,
      description: onPostForm.description.value,
      prep: onPostForm.prep.value,
      cook: onPostForm.cook.value,
      servings: onPostForm.servings.value,
      ingredients: onPostForm.ingredients.value,
      utensils: onPostForm.utensils.value,
      tags: [onPostForm.tags.value],
      date: new Date(),
    };

    fetch("https://blog-5c8a0.firebaseio.com/posts.json", {
      method: "post",
      body: JSON.stringify(postInfo),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
displayContext.toggleIsLoading(false)
displayContext.togglePostAdded(true);
        return response.json();
      })
      .then((res) => console.log(res)).catch(error=> displayContext.toggleIsLoading(false))
  }
 

  const onChangeInputHandler = (event, inputIdentifier) => {
  
    const updatedPostForm = {
      ...onPostForm,
    };
    const updatedFormElement = {
      ...updatedPostForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedPostForm[inputIdentifier] = updatedFormElement;
    setPostForm(updatedPostForm );
  };


    return (
        <InputContext.Provider value={{
            postForm: onPostForm, 
            postNewPost: postDataHandler,
            changeInput: onChangeInputHandler,
            formElementsArray: onFormElementsArray

    }}>{props.children}</InputContext.Provider>
    )
}

export default InputContextProvider