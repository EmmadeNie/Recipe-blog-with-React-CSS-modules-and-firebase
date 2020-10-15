import React, { useReducer, useEffect, useContext, useState } from "react";
import image from "../../assets/images/kipburger.jpeg";

//CONTEXT
import {DisplayContext} from "../../context/display-context"
import {InputContext} from "../../context/input-context"
import useForm from "../../context/useForm"

//COMPONENTS
import Aux from "../../hoc/Auxiliary";
import Button from "../UI/Button";
import Tag from "../UI/tag"
import Input from "../UI/Input"


function FullPost(props) {
  const displayContext = useContext(DisplayContext);
   const [newTag, setNewTag] = useState("")
   const {getPost, values, handleChange, handleUpdate, deletePost, updateArray} = useForm()
  
   useEffect(() => {
   getPost()
  }, []);

  const handleChangeTag = (event)=> {
setNewTag(event.target.value)
  }
  console.log(newTag)

    const onDeletePostHandler = () => {
    displayContext.updateCurrentPost(null);
    displayContext.toggleEditMode(false);
    deletePost()
  }
  
  const onSaveTag = ()=> {
return updateArray(newTag), handleUpdate()
  }
  const onSavePost = (event)=>{
    displayContext.toggleEditMode(false);
    handleUpdate(event)
  }

  let description = displayContext.editMode ? (
     <textarea
           type="text"
           name="description"
           placeholder="description"
          className="full-post-description--edit-mode"
          value={values.description}
          onChange={handleChange}
        />  
  ) : (
    <p>{values.description}</p>
  );

  let title = displayContext.editMode ? (
     <textarea
           type="text"
           name="title"
           placeholder="title"
          className="full-post-description--edit-mode"
          value={values.title}
          onChange={handleChange}
        />  
  ) : (
    <h1>{values.title}</h1>
  );

  let tags = displayContext.tagMode ? (
            <Aux><input
           type="text"
           name="tags"
           placeholder="tags"
          className="input"
          onChange={handleChangeTag}
        /><Button
                icon="FiCheck"
                text="save tags"
                handleOnClick={onSaveTag}
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
          {title}
          <p>{values.author}</p>
{values.tags && values.tags.map(tag=><Tag key={tag.concat(tag.indexOf())} text={tag}/>)}
          <p>
            <strong>bereiding: </strong>
            {values.prep} min || <strong>wachten: </strong>
            {values.cook} || <strong>personen: </strong>
            {values.servings}
          </p>
          <p>
            {" "}
            <strong>benodigdheden: </strong>
            {values.utensils}
          </p>
          <p>
            {" "}
            <strong>serveertips: </strong>
            {values.servetips}
          </p>

          {description}<br></br><div className="full-post__textbox--button">
 <Aux><Button
            icon="FiX"
            text="delete post"
            handleOnClick={onDeletePostHandler}
            disabled={!displayContext.editMode}
          /> <span>   |   </span></Aux>
          <Button
            icon="FiEdit2"
            text={displayContext.editMode ? "save post" : "edit post"}
            handleOnClick={displayContext.editMode? onSavePost : displayContext.toggleEditMode}
          /></div>
        </div>
      </div>
    </Aux>
  );
}

export default FullPost;
