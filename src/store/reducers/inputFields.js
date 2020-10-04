import * as actionTypes from "../actions";

const initialState = {
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

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_POSTS:
      return { ...state, editMode: !state.editMode };
    default:
      return state;
  }
};

export default postsReducer;
