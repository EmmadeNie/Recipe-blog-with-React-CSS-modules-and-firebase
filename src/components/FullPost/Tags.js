import React, {useState, useContext} from 'react'

//HOC
import Aux from "../../hoc/Auxiliary"

//CONTEXT
import  { DisplayContext } from "../../context/display-context"
import useForm from "../../context/useForm"

//COMPONENTS
import Button from "../UI/Button"
import Tag from "../UI/Tag"

function Tags(props) {
const [newTag, setNewTag] = useState("")
const displayContext = useContext(DisplayContext)
const {updateArray} = useForm()

 const handleChangeTag = (event)=> {
setNewTag(event.target.value)
  }

   const handleSubmitTag = event=> {
         event.preventDefault()
        displayContext.toggleIsLoading(true)

    const tagInfo = {
      tagName: newTag,
      date: new Date(),
    };

    fetch(`https://blog-5c8a0.firebaseio.com/posts/${displayContext.currentPost}/tags.json`, {
      method: "post",
      body: JSON.stringify(tagInfo),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => { 
        return response.json();
      })
      .then((res) => console.log(res)).catch(error=> displayContext.toggleIsLoading(false))

    }

    return (
        <div className="tags-display-container">
        <div className="tags-list">
       {props.tags && props.tags.map(tag=> <Tag tag={tag} key={tag.id} />)}</div>
            {displayContext.tagMode ? (
            <Aux><input
           type="text"
           name="tags"
           placeholder={props.tags && props.tags[0].tagName}
          className="full-post__tags-input"
          onChange={handleChangeTag}
        /><Button
                icon="FiCheck"
                text="save tags"
                handleOnClick={handleSubmitTag}
              /></Aux>) : (
            <Button
              icon="FiEdit2"
              text="edit tags"
              handleOnClick={()=>displayContext.toggleTagMode(true)}
            />)}
        </div>
    )
}

export default Tags
