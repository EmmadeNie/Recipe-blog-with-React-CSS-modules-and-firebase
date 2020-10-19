import React, {useEffect, useContext, useState } from "react";
import image from "../../assets/images/kipburger.jpeg";

//CONTEXT
import useForm from "../../context/useForm"
import { DisplayContext } from "../../context/display-context"
import { PostsContext } from "../../context/posts-context"

//COMPONENTS
import Aux from "../../hoc/Auxiliary";
import Button from "../UI/Button";
import Tags from "./Tags"

function FullPost() {
   const [post, setPost] = useState({})
   const displayContext = useContext(DisplayContext)
   const postsContext = useContext(PostsContext)
   const {handleChange, updatePost, deletePost} = useForm()
  
   useEffect(() => {
        fetch(`https://blog-5c8a0.firebaseio.com/posts/${displayContext.currentPost}.json`)
      .then((response) => {
        return response.json();
      }) .then((res) => {
        const fetchedTags = [];
        for (let key in res.tags) {
          fetchedTags.push({
            ...res.tags[key],
            id: key
          })
        } setPost({...res, tags: fetchedTags})})
      .catch((err) => {});
   displayContext.toggleIsLoading(true)
  }, []);

    const onDeletePostHandler = () => {
    displayContext.updateCurrentPost(null);
    displayContext.toggleEditMode(false);
    deletePost()
  }

  const onSavePost = (event)=>{
    displayContext.toggleEditMode(false);
    updatePost(event)
  }

  let description = displayContext.editMode ? (
     <textarea
           type="text"
           name="description"
           placeholder="description"
          className="full-post-description--edit-mode"
          value={post.description}
          onChange={handleChange}
        />  
  ) : (
    <p>{post.description}</p>
  );

  let title = displayContext.editMode ? (
     <textarea
           type="text"
           name="title"
           placeholder="title"
          className="full-post-description--edit-mode"
          value={post.title}
          onChange={handleChange}
        />  
  ) : (
    <h1>{post.title}</h1>
  );
    
  return (
    <Aux>
      <div className="full-post">
        <div className="full-post__image">
          <Tags tags={post.tags} />
          <img src={image} alt="kipburger" />
        </div>
        <div className="full-post__textbox">
          {title}
          <p>{post.author}</p>
          <div className="full-post__textbox--buttons-container">
          <div className="full-post__textbox-tabs">
          <a className="tag-item" href="/home">Overview</a><a
            className="tag-item"
          href="/home">Ingredienten</a><a
            className="tag-item"
          href="/home">Bereiding</a></div></div>
          
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
     <div className="full-post__textbox--button">     
 <Button
            icon="FiX"
            text="delete post"
            handleOnClick={onDeletePostHandler}
            disabled={!displayContext.editMode}
          /> <span>   |   </span>
          <Button
            icon="FiEdit2"
            text={displayContext.editMode ? "save post" : "edit post"}
            handleOnClick={displayContext.editMode? onSavePost : ()=>displayContext.toggleEditMode(true)}
          /></div>
        </div>
      </div>
    </Aux>
  );
}

export default FullPost;
