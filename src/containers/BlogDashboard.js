import React, {useContext, useEffect} from 'react'
import TagCategory from "../components/TagCategory"
import {DisplayContext} from "../context/display-context"
import {PostsContext} from "../context/posts-context"

function BlogDashboard(props) {
  const displayContext = useContext(DisplayContext);
  const postsContext = useContext(PostsContext);

  useEffect(()=>{postsContext.getPosts()},[])
    useEffect(()=>{console.log("lala", postsContext.posts)},[postsContext.posts])

    return (
        <div>
            <TagCategory tag="burger"/>
        </div>
    )
}

export default BlogDashboard
