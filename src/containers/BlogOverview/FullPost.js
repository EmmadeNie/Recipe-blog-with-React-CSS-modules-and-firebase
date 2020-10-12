import React, { useReducer, useEffect, useState, useContext } from "react";
import image from "../../assets/images/kipburger.jpeg";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Button from "../../components/UI/Button/Button";
import Tag from "../../components/UI/tag"
import {DisplayContext} from "../../context/display-context"

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

  const [post, dispatch] = useReducer(postReducer, {});
  const [tagMode, setTagMode] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [postDescription, setPostDescription] = useState('')
  
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

  const onToggleTagMode = () => {
    setTagMode((prevMode) => !prevMode);
  };

  const onChangeTagHandler = (newValue) => {
    setNewTag(newValue);
  };

  const onChangePostDescriptionHandler = (newValue)=>{
    setPostDescription(newValue)
    
  }
 
  const onSavePost = ()=>{
    displayContext.toggleEditMode(false);
     
    const updatedPost = { ...post, description: postDescription };
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
    onToggleTagMode();
    const tags = post.tags.concat(newTag);
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
      .then((res) => console.log(res))}

  let description = displayContext.editMode ? (
    <textarea
      className="full-post__description--edit-mode"
      onChange={(event) => onChangePostDescriptionHandler(event.target.value)}
      defaultValue={post.description}
    />
  ) : (
    <p>{post.description}</p>
  );

  return (
    <Aux>
      <div className="full-post">
        <div className="full-post__image">
          {tagMode ? (
            <Aux>
              <input
                className="infront-image"
                type="text"
                onChange={(event) => onChangeTagHandler(event.target.value)}
              />
              <Button
                icon="FiCheck"
                text="save tags"
                handleOnClick={onSubmitTag}
              />
            </Aux>
          ) : (
            <Button
              icon="FiEdit2"
              text="edit tags"
              handleOnClick={onToggleTagMode}
            />
          )}
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
