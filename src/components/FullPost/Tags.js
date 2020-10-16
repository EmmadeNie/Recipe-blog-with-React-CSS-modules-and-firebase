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

  

    return (
        <div className="tags-display-container">
        <div className="tags-list">
        {props.tags && props.tags.map(tag=><Tag key={tag.concat(tag.indexOf())} text={tag}/>)}</div>
            {displayContext.tagMode ? (
            <Aux><input
           type="text"
           name="tags"
           placeholder={props.tags && props.tags[0]}
          className="full-post__tags-input"
          onChange={handleChangeTag}
        /><Button
                icon="FiCheck"
                text="save tags"
                handleOnClick={()=>props.onSaveTags(newTag)}
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
