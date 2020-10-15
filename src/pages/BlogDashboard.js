import React, {useContext, useEffect} from 'react'

//CONTEXT
import {PostsContext} from "../context/posts-context"

//PAGES
import BlogOverview from "./BlogOverview"

//HOC
import Layout from "../hoc/Layout"

function BlogDashboard(props) {
  const postsContext = useContext(PostsContext);

  useEffect(()=>{postsContext.getPosts()},[])
   

    return (
        <div>
        <Layout>
            <BlogOverview tag="burger"/>
         <BlogOverview tag="pompoen"/>
          <BlogOverview /></Layout>
        </div>
    )
}

export default BlogDashboard
