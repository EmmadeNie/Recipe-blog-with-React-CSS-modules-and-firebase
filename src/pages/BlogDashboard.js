import React, {useContext, useEffect} from 'react'

//CONTEXT
import {DisplayContext} from "../context/display-context"
import {PostsContext} from "../context/posts-context"

//COMPONENTS
import TagCategory from "../components/TagCategory"

function BlogDashboard(props) {
  const displayContext = useContext(DisplayContext);
  const postsContext = useContext(PostsContext);

  useEffect(()=>{postsContext.getPosts()},[])
   

    return (
        <div>
            <TagCategory tag="burger"/>
            <TagCategory tag="pompoen"/>
        </div>
    )
}

export default BlogDashboard
