import React, { useReducer, useEffect, useState, useContext } from "react";
import image from "../assets/images/kipburger.jpeg";

//CONTEXT
import {DisplayContext} from "../context/display-context"
import {InputContext} from "../context/input-context"

//COMPONENTS
import Aux from "../hoc/Auxiliary";
import Button from "./UI/Button";
import Tag from "./UI/tag"
import Input from "./UI/Input"


const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_FULLPOST":
      return action.fullPost;
    case "ADD_TAG":
      return action.fullPost;
    default:
      throw new Error("Should not get there");
  }
};

function FullPost(props) {
  const displayContext = useContext(DisplayContext);
   const inputContext = useContext(InputContext);

  const [post, dispatch] = useReducer(postReducer, {});
  const [newTag, setNewTag] = useState("");

  let descriptionInput = inputContext.formElementsArray.find(formElement=>formElement.id === "description")
  let tagsInput = inputContext.formElementsArray.find(formElement=>formElement.id === "tags")
  
    const onDeletePostHandler = () => {
    displayContext.updateCurrentPost(null);
    displayContext.togglePostDeleted(true);
    displayContext.toggleEditMode(false);
  }
  
  useEffect(() => {
    fetch(`https://blog-5c8a0.firebaseio.com/posts/${props.currentId}.json`)
      .then((response) => {
        return response.json();
      })
      .then((res) => dispatch({ type: "SET_FULLPOST", fullPost: res }))
      .catch((err) => {});
  }, []);


  const onChangeTagHandler = (newValue) => {
    setNewTag(newValue);
  };

  const onSavePost = ()=>{
    displayContext.toggleEditMode(false);
     
    const updatedPost = { ...post, description: descriptionInput.config.value };
    fetch(`https://blog-5c8a0.firebaseio.com/posts/${props.currentId}.json`, {
      method: "put",
      body: JSON.stringify(updatedPost),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => dispatch({ type: "SET_FULLPOST", fullPost: res }));
  }

  const onSubmitTag = () => {
    displayContext.toggleTagMode();
    const tags = post.tags.concat(tagsInput.config.value);
    const updatedPost = { ...post, tags: tags };
    fetch(`https://blog-5c8a0.firebaseio.com/posts/${props.currentId}.json`, {
      method: "put",
      body: JSON.stringify(updatedPost),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => dispatch({ type: "SET_FULLPOST", fullPost: res }));
  };

    const onDeletePost = ()=> { fetch(`https://blog-5c8a0.firebaseio.com/posts/${props.currentId}.json`, {
      method: "delete",
    })
      .then((response) => {
        onDeletePostHandler()
        return response.json();
      })
     }

  let description = displayContext.editMode ? (
      <Input
            key={descriptionInput.id}
            elementType={descriptionInput.config.elementType}
            elementConfig={descriptionInput.config.elementConfig}
            defaultValue={post.description}
            changed={(event)=> inputContext.changeInput(event,
              descriptionInput.id
            )}
          />
  ) : (
    <p>{post.description}</p>
  );

  let tags = displayContext.tagMode ? (
            <Aux><Input
            className="infront-image"
            key={tagsInput.id}
            elementType={tagsInput.config.elementType}
            elementConfig={tagsInput.config.elementConfig}
            changed={(event)=> inputContext.changeInput(event,
              tagsInput.id
            )}
          /><Button
                icon="FiCheck"
                text="save tags"
                handleOnClick={onSubmitTag}
              /></Aux>) : (
            <Button
              icon="FiEdit2"
              text="edit tags"
              handleOnClick={displayContext.toggleTagMode}
            />
          )

  return (
    <Aux>
      <div className="full-post">
        <div className="full-post__image">
          {tags}
          <img src={image} alt="kipburger" />
        </div>
        <div className="full-post__textbox">
          <h1>{post.title}</h1>
          <p>{post.author}</p>
{post.tags && post.tags.map(tag=><Tag key={tag.indexOf()} text={tag}/>)}
          <p>
            <strong>bereiding: </strong>
            {post.prep} min || <strong>wachten: </strong>
            {post.cook} || <strong>personen: </strong>
            {post.servings}
          </p>
          <p>
            {" "}
            <strong>benodigdheden: </strong>
            {post.utensils}
          </p>
          <p>
            {" "}
            <strong>serveertips: </strong>
            {post.servetips}
          </p>

          {description}<br></br>
 {displayContext.editMode && <Aux><Button
            icon="FiX"
            text="delete post"
            handleOnClick={onDeletePost}
          /> <span>   |   </span></Aux>}
          <Button
            icon="FiEdit2"
            text={displayContext.editMode ? "save post" : "edit post"}
            handleOnClick={displayContext.editMode? onSavePost : displayContext.toggleEditMode}
          />
          {displayContext.editMode ? <p>Hello</p> : <p>What?</p>}
        </div>
      </div>
    </Aux>
  );
}

export default FullPost;
