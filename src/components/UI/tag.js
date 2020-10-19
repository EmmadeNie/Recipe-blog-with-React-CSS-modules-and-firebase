import React, {useContext} from "react";
import { FiTag, FiX } from "react-icons/fi";

//CONTEXT
import {DisplayContext} from "../../context/display-context"

const Tag = (props) => {
const displayContext = useContext(DisplayContext)
  const onDeleteTag = ()=> { fetch(`https://blog-5c8a0.firebaseio.com/posts/${displayContext.currentPost}/tags/${props.tag.id}.json`, {
      method: "delete",
    })
      .then((response) => {
        return response.json();
      })
     }

  return (
    <div className="tag-container">
      <a className="tag-item" href="/home"> <FiTag /> {props.tag.tagName}  </a>
      {displayContext.tagMode  && <FiX color="white" className="delete-tag" onClick={onDeleteTag}/>}</div>
  );
};

export default Tag;
